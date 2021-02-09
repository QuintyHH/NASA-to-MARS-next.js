import { useEffect } from 'react'
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
import { sleep } from '../../utils/sleep'

export const MissionControl = () => {
  const {
    webState,
    missionState: {
      rovers,
      mode: currentMode,
      currentMove,
      currentRover,
      status: currentStatus,
    },
    setMissionState,
    setWebState,
  } = useCustomSelector()

  //checking to see if all rovers are loaded
  const roversLoaded = rovers.length

  //checking to see if all rovers are 'DONE'
  const missionDone =
    roversLoaded &&
    rovers.filter((rover) => rover.status === roverStatus.DONE).length ===
      roversLoaded

  // here we decide which rover should go next and we also keep track of current move count
  useEffect(async () => {
    if (roversLoaded && !missionDone && currentMode === mode.PARALLEL) {
      /*we use modulo to iterate through the rovers array resetting the 
      index once it goes over rover array length, and pick the next rover in line 
      
      in this case, modulo will return -1 if currentMove is 0, 
      so we need to escape the case by defaulting to 0
      */
      const targetIndex = Math.max((currentMove - 1) % roversLoaded, 0)
      const targetRover = rovers[targetIndex]
      if (targetRover.status !== status.DONE) {
        setMissionState(
          setCurrentRover({
            ...currentRover,
            name: targetRover.name,
          })
        )
      }
    }

    if (roversLoaded && !missionDone && currentMode === mode.SEQUENTIAL) {
      const targetRover = rovers[currentRover.idx]
      if (targetRover.status !== status.DONE) {
        setMissionState(
          setCurrentRover({
            ...currentRover,
            name: targetRover.name,
          })
        )
      } else if (currentRover.idx < roversLoaded) {
        setMissionState(
          setCurrentRover({
            name: rovers[currentRover.idx + 1].name,
            idx: currentRover.idx + 1,
          })
        )
      }
    }

    if (roversLoaded && !missionDone && currentStatus === status.ACTIVE) {
      await sleep(config.roverMoveSpeed)
      setMissionState(setCurrentMove(currentMove + 1))
    } else if (roversLoaded && missionDone) {
      setMissionState(updateMissionStatus(status.DONE))
    }
  }, [currentMove])

  /*here we check to see if the mission has been set to active or done. if active, 
  triggers the other useEffect that updates rovers and rover order */
  useEffect(() => {
    switch (true) {
      case currentStatus === status.ACTIVE: {
        setWebState(startLoading())
        setMissionState(setCurrentMove(currentMove + 1))
        return
      }
      case currentStatus === status.DONE: {
        setWebState(stopLoading())
        setWebState(addNotification(config.notification.success))
        setMissionState(setCurrentMove(0))
        return
      }
      default:
        return
    }
  }, [currentStatus])

  const handleResetMission = () => {
    setMissionState(resetMission())
    setWebState(stopLoading())
  }
  const handleLaunch = () => setMissionState(updateMissionStatus(status.ACTIVE))
  const launchButtonState = () => {
    return !roversLoaded
      ? config.disabledText
      : webState.isLoading
      ? config.resetMission
      : missionDone
      ? config.resetMission
      : config.launchButton
  }

  return (
    <div className={'file-control-wrapper'}>
      <SimpleButton
        disabled={!roversLoaded}
        onClick={
          webState.isLoading || missionDone ? handleResetMission : handleLaunch
        }
        isRed
        width={'100%'}
        height={'100%'}
        square
      >
        {launchButtonState()}
      </SimpleButton>
    </div>
  )
}
