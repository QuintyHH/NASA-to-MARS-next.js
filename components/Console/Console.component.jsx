import { useEffect } from 'react'
import { BLACK, BLACK_GRADIENT, WHITE, GRAY } from '../../constants/colors'
import { useCustomSelector } from '../../store/ContextProvider'
import config from './Console.config'

export const Console = () => {
  const {
    missionState: { log },
  } = useCustomSelector()

  return (
    <>
      <div className="console-wrapper">
        {config.title}
        {log.map((entry, index) => (
          <div className={'log-entry'} key={index}>
            {entry}
          </div>
        ))}
      </div>
      <style jsx>{`
        .console-wrapper {
          position: static;
          left: 0;
          width: 100px;
          height: 100%;
          margin: 0px;
          display: inline-block;
          background: ${BLACK_GRADIENT};
          border-right: 2px solid ${BLACK};
          text-align: center;
          padding: 5px 0;
          font-weight: 500;
          color: ${WHITE};
        }
        .log-entry {
          color: ${GRAY};
          text-align: left;
          padding: 5px 0 0 4px;
          font-weight: 400;
          font-size: 14px;
          border-bottom: 1px dotted ${BLACK};
        }
      `}</style>
    </>
  )
}
