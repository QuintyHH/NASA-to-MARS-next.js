import { MARS } from '../../constants/images'
import { Grid } from '../Grid'
import { Console } from '../Console'
import { useCustomSelector } from '../../store/ContextProvider'

export const MarsMap = () => {
  const {
    missionState: { rovers },
  } = useCustomSelector()

  return (
    <>
      <div className={'the-map'}>
        <Console />
        {rovers.length ? <Grid /> : null}
      </div>
      <style jsx>{`
        .the-map {
          width: 100%;
          height: 100%;
          background-image: url('${MARS}');
          background-repeat: repeat;
          position: relative;
          overflow: scroll;
        }
      `}</style>
    </>
  )
}
