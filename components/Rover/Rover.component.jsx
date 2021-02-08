import { useState, useEffect } from 'react'
import { Rover as RoverImage } from '../../constants/images'
import { useCustomSelector } from '../../store/ContextProvider'
import { addNotification } from '../../actions/web'
import { addToLog, updateRover } from '../../actions/mission'
import { roverStatus } from '../../constants/mission'
import { BLACK } from '../../constants/colors'
import config from './Rover.config'

export const Rover = ({ roverInfo }) => {
  const {
    missionState: { grid, currentRover, currentMove },
    setMissionState,
    setWebState,
  } = useCustomSelector()

  const [currentLocation, setCurrentLocation] = useState(
    roverInfo.initialPosition
  )

  const displayLog = () =>
    `${roverInfo.name} (X:${currentLocation.xAxis} Y:${currentLocation.yAxis})`

  const constructLogMessage = (flag) => {
    const callsign = `${roverInfo.name[0]}${
      roverInfo.name[roverInfo.name.length - 1]
    }`
    const position = `(X:${currentLocation.xAxis} Y:${currentLocation.yAxis})`
    return !flag ? `${callsign} ${position}` : `${callsign} is done.`
  }

  const handleOrientation = () => {
    switch (true) {
      case roverInfo.route[currentLocation.moveCount] === 'L':
        return setCurrentLocation({
          ...currentLocation,
          moveCount: currentLocation.moveCount + 1,
          orientation: currentLocation.orientation - 90,
        })
      case roverInfo.route[currentLocation.moveCount] === 'R':
        return setCurrentLocation({
          ...currentLocation,
          moveCount: currentLocation.moveCount + 1,
          orientation: currentLocation.orientation + 90,
        })
      case roverInfo.route[currentLocation.moveCount] === 'M':
        return handleMovement()
      default:
        return setCurrentLocation({
          ...currentLocation,
          moveCount: currentLocation.moveCount + 1,
        })
    }
  }

  const handleMovement = () => {
    const modulo = (currentLocation.orientation / 90) % 4

    switch (true) {
      case modulo === 0:
      case modulo === -0:
        return setCurrentLocation({
          ...currentLocation,
          moveCount: currentLocation.moveCount + 1,
          yAxis: currentLocation.yAxis + 1,
        })

      case modulo === 1:
      case modulo === -3:
        return setCurrentLocation({
          ...currentLocation,
          moveCount: currentLocation.moveCount + 1,
          xAxis: currentLocation.xAxis + 1,
        })
      case modulo === 2:
      case modulo === -2:
        return setCurrentLocation({
          ...currentLocation,
          moveCount: currentLocation.moveCount + 1,
          yAxis: currentLocation.yAxis - 1,
        })
      case modulo === 3:
      case modulo === -1:
        return setCurrentLocation({
          ...currentLocation,
          moveCount: currentLocation.moveCount + 1,
          xAxis: currentLocation.xAxis - 1,
        })

      default:
        return setCurrentLocation({
          ...currentLocation,
          moveCount: currentLocation.moveCount + 1,
        })
    }
  }

  useEffect(() => {
    if (
      currentRover === roverInfo.name &&
      roverInfo.status !== roverStatus.DONE
    ) {
      if (currentLocation.moveCount < roverInfo.route.length) {
        handleOrientation()
        setMissionState(addToLog(constructLogMessage()))
      } else {
        setMissionState(
          updateRover({ name: roverInfo.name, status: roverStatus.DONE })
        )
        setMissionState(addToLog(constructLogMessage(true)))
      }
    }
  }, [currentMove])

  useEffect(() => {
    switch (true) {
      case currentLocation.xAxis > grid.width:
      case currentLocation.yAxis > grid.height:
      case currentLocation.xAxis < 0:
      case currentLocation.yAxis < 0: {
        return setWebState(addNotification(config.notification.fail))
      }
      default:
        return
    }
  }, [currentLocation])

  return (
    <>
      <div className={'rover-wrapper'}>
        <div className={'rover-info'}>{displayLog()}</div>
        <div className={'rover'} />
      </div>
      <style jsx>{`
        .rover-wrapper {
          position: absolute;
          transition: 500ms;
          bottom: ${grid.cellSide * currentLocation.yAxis}px;
          left: ${grid.cellSide * currentLocation.xAxis}px;
          animation-timing-function: cubic-bezier(0.1, -0.1, 0.2, 0);
        }
        .rover-info {
          position: relative;
          left: -25px;
          font-weight: 500;
          color: ${roverInfo.color};
          text-shadow: 1px 1px ${BLACK};
        }
        .rover {
          width: ${grid.cellSide}px;
          height: ${grid.cellSide}px;
          transform: rotate(${currentLocation.orientation}deg);
          transform-origin: 50% 50%;
          background-image: url('${RoverImage}');
          background-size: ${grid.cellSide * 0.8}px;
          background-repeat: no-repeat;
          background-position: center center;
        }
      `}</style>
    </>
  )
}
