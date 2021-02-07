import {
  BLUE,
  WHITE,
  BLACK,
  GRAY,
  RED,
  GRAY_SECONDARY,
} from '../../constants/colors'
export const SimpleButton = ({
  children = '',
  onClick = (f) => f,
  disabled = false,
  width = '90%',
  height = '50px',
  square = false,
  isRed = false,
  ...props
}) => {
  return (
    <>
      <button
        className="button"
        type="button"
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
      <style jsx>{`
        .button {
          width: ${width};
          height: ${height};
          background-color: ${isRed ? RED : BLUE};
          border-radius: ${square ? 0 : '10px'};
          margin: 0 auto 10px auto;
          text-align: center;
          display: inline-block;
          align-items: flex-start;
          letter-spacing: normal;
          word-spacing: normal;
          text-transform: none;
          text-indent: 0px;
          text-shadow: none;
          padding: 15px 6px;
          border-width: 3px;
          border-style: hidden;
          text-rendering: auto;
          color: ${WHITE};
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 16px;
          -webkit-writing-mode: horizontal-tb !important;
          font-weight: 500;
          transition: 200ms;
        }

        .button:focus {
          outline: none;
        }

        .button:hover {
          color: ${BLACK};
          background-color: ${WHITE};
        }

        .button:disabled,
        button[disabled] {
          background-color: ${GRAY_SECONDARY};
          color: ${GRAY};
        }
      `}</style>
    </>
  )
}
