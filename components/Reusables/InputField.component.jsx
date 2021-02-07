import { WHITE, BLACK, RED } from '../../constants/colors'
export const InputField = ({
  children = '',
  onChange = (f) => f,
  value = null,
  disabled = false,
  width = '90%',
  error = false,
  margin = '0',
  noBorder = false,
  square = false,
  centerLabel = false,
  ...props
}) => {
  return (
    <>
      <div className={'input-wrapper'} {...props}>
        <label htmlFor="input-field" className="label">
          {children}
        </label>
        <input
          className={'input-field'}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>

      <style jsx>{`
        .input-wrapper {
          width: ${width};
          display: inline-block;
          margin: ${margin};
        }
        .label {
          display: block;
          border-radius: 5px;
          margin: 3px auto 3px 5px;
          color: ${error ? RED : WHITE};
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 16px;
          font-weight: 500;
          text-align: ${centerLabel ? 'center' : 'initial'};
        }

        .input-field {
          width: 100%;
          height: 50px;
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
          border-width: 2px;
          border-radius: ${square ? 0 : '3px'};
          border: ${noBorder ? 0 : `2px solid ${BLACK}`};
          text-rendering: auto;
          color: ${disabled ? WHITE : BLACK};
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 16px;
          -webkit-writing-mode: horizontal-tb !important;
          font-weight: 500;
          transition: 200ms;
        }
      `}</style>
    </>
  )
}
