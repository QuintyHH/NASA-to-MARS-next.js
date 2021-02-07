import { Header } from '../Header'
import { GridControl } from '../GridControl'
import { ModeControl } from '../ModeControl'
import { FileControl } from '../FileControl'
import { MissionControl } from '../MissionControl'
import { BLUE, MAIN_GRADIENT } from '../../constants/colors'

export const SideMenu = () => {
  return (
    <>
      <div className="sidemenu-wrapper">
        <Header />
        <GridControl />
        <ModeControl />
        <FileControl />
        <MissionControl />
      </div>
      <style jsx>{`
        .sidemenu-wrapper {
          text-align: center;
          position: static;
          width: 300px;
          height: 100%;
          margin: 0px;
          display: grid;
          grid-template-rows: 250px auto auto auto 120px;
          border-left: 5px solid ${BLUE};
          background: ${MAIN_GRADIENT};
        }
      `}</style>
    </>
  )
}
