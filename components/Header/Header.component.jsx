import { WHITE } from '../../constants/colors'
import { NASA } from '../../constants/images'
import config from './Header.config'

export const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="nasa-logo" />
        <div className="sidemenu-title">{config.description}</div>
      </div>
      <style jsx>{`
        .nasa-logo {
          width: 200px;
          height: 150px;
          background-image: url('${NASA}');
          background-size: contain;
          background-repeat: no-repeat;
          margin: 20px auto;
        }
        .sidemenu-title {
          font-size: 2em;
          text-align: center;
          margin-bottom: 20px;
          color: ${WHITE};
        }
      `}</style>
    </>
  )
}
