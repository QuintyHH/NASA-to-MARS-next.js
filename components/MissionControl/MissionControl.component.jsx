import { useState, useEffect } from 'react'
import { useCustomSelector } from '../../store/ContextProvider'
import { startLoading, stopLoading, addNotification } from '../../actions/web'
import {
  resetMission,
  updateMissionStatus,
  setCurrentRover,
  setCurrentMove,
} from '../../actions/mission'
import { SimpleButton } from '../Reusables'
import { status, mode, roverStatus } from '../../constants/mission'
import config from './MissionControl.config'

export const MissionControl = () => {
  const {
    webState,
    missionState,
    setMissionState,
    setWebState,
  } = useCustomSelector()
  const [roverIndex, setRoverIndex] = useState(0)
  const disabledState = !missionState.rovers.length
  //checking to see if all rovers are 'DONE'
  const missionDone =
    missionState.rovers.length &&
    missionState.rovers.filter((rover) => rover.status === roverStatus.DONE)
      .length === missionState.rovers.length

  useEffect(() => {
    missionDone && setMissionState(updateMissionStatus(status.DONE))
  }, [missionState.rovers])

  /* here we decide which rover should go next and we also keep track of current move count */
  useEffect(() => {
    const roversLoaded = missionState.rovers.length
    if (roversLoaded && missionState.mode === mode.PARALLEL) {
      /*we use modulo to iterate through the rovers array resetting the 
      index once it goes over rover array length, and pick the next rover in line 
      
      we use optional chaining to escape cases where the setTimeout is causing 
      issues with updating the component level state 
      */
      const targetRover =
        missionState.rovers[(missionState.currentMove - 1) % roversLoaded]
      if (targetRover?.status !== status.DONE) {
        setMissionState(setCurrentRover(targetRover?.name))
      }
    }

    if (roversLoaded && missionState.mode === mode.SEQUENTIAL) {
      const targetRover = missionState.rovers[roverIndex]
      if (targetRover?.status !== status.DONE) {
        setMissionState(setCurrentRover(targetRover?.name))
      } else if (roverIndex < missionState.rovers.length) {
        setRoverIndex(roverIndex + 1)
      }
    }

    setTimeout(() => {
      if (missionState.status === status.ACTIVE) {
        setMissionState(setCurrentMove(missionState.currentMove + 1))
      }
    }, 500)
  }, [missionState.currentMove])

  /*here we check to see if the mission has been set to active or done. if active, 
  triggers the other useEffect that updates rovers and rover order */
  useEffect(() => {
    switch (true) {
      case missionState.status === status.ACTIVE: {
        setWebState(startLoading())
        setMissionState(setCurrentMove(missionState.currentMove + 1))
        return
      }
      case missionState.status === status.DONE: {
        setWebState(stopLoading())
        setWebState(addNotification(config.notification.success))
        setMissionState(setCurrentMove(0))
        return
      }
      default:
        return
    }
  }, [missionState.status])

  const handleResetMission = () => setMissionState(resetMission())
  const handleLaunch = () => setMissionState(updateMissionStatus(status.ACTIVE))

  return (
    <div className={'file-control-wrapper'}>
      <SimpleButton
        disabled={disabledState}
        onClick={
          webState.isLoading || missionDone ? handleResetMission : handleLaunch
        }
        isRed={true}
        width={'100%'}
        height={'100%'}
        square
      >
        {disabledState
          ? config.disabledText
          : webState.isLoading
          ? config.resetMission
          : missionDone
          ? config.resetMission
          : config.launchButton}
      </SimpleButton>
    </div>
  )
}
