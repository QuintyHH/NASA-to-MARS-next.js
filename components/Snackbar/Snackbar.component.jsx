import { useEffect } from 'react'
import { useCustomSelector } from '../../store/ContextProvider'
import { removeNotification } from '../../actions/web'
import { WHITE, RED, GREEN } from '../../constants/colors'
import config from './Snackbar.config'

const Snackbar = () => {
  const {
    webState: { notification },
    setWebState,
  } = useCustomSelector()

  useEffect(() => {
    setTimeout(() => {
      setWebState(removeNotification())
    }, config.timeout)
  }, [notification])

  const { message, type } = notification

  return (
    <>
      <div className={'snackbar'}>{message}</div>
      <style jsx>{`
        .snackbar {
          opacity: 0;
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 330px;
          height: 50px;
          padding: 10px 0 10px 15px;
          border: 2px solid ${WHITE};
          border-radius: 10px;
          color: ${WHITE};
          font-size: 18px;
          font-weight: 500;
          transition: 200ms;
          background-color: ${type === 'success' ? GREEN : RED};
          animation: fade ease 3s;
        }

        @keyframes fade {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export { Snackbar }
