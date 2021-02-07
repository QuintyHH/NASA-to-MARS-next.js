import {
  BLUE,
  WHITE,
  BLACK,
  GRAY,
  GRAY_SECONDARY,
} from '../../constants/colors'
export const UploadButton = ({
  children = '',
  onChange = (f) => f,
  disabled = false,
  ...props
}) => {
  return (
    <>
      <>
        <label htmlFor="file-upload" className="button">
          {children}
        </label>
        <input
          hidden
          id="file-upload"
          onChange={!disabled ? onChange : null}
          accept=".csv"
          type="file"
          {...props}
        ></input>
      </>
      <style jsx>{`
        .button {
          width: 90%;
          height: 50px;
          background-color: ${disabled ? GRAY_SECONDARY : BLUE};
          border-radius: 10px;
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
          color: ${disabled ? GRAY : WHITE};
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
          color: ${disabled ? GRAY : BLACK};
          background-color: ${disabled ? GRAY_SECONDARY : WHITE};
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
