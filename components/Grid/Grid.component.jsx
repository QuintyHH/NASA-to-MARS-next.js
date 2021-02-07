import { useCustomSelector } from '../../store/ContextProvider'
import { BLUE, GRAY_SECONDARY } from '../../constants/colors'
import { Rover } from '../Rover'

export const Grid = () => {
  const {
    missionState: { grid, rovers },
  } = useCustomSelector()

  return (
    /*easier to figure out each rover if we just pass roverInfo info via props */
    <>
      <div className={'the-grid'}>
        {rovers.length &&
          rovers.map((rover) => <Rover key={rover.name} roverInfo={rover} />)}
      </div>
      <style jsx>{`
        .the-grid {
          display: inline-block;
          box-sizing: content-box;
          position: absolute;
          height: ${grid.cellSide * grid.height}px;
          width: ${grid.cellSide * grid.width}px;
          border: 2px dashed ${BLUE};
          margin: 50px;
          padding: 0;
          background-size: ${grid.cellSide}px ${grid.cellSide}px;
          background-image: linear-gradient(
              to right,
              ${GRAY_SECONDARY} 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, ${GRAY_SECONDARY}, transparent 1px);
          transition: 200ms;
          animation: fade ease 1s;
        }

        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
