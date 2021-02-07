import { WHITE, BLACK, RED } from '../../constants/colors'
export const InputRadio = ({
  children = '',
  onChange = (f) => f,
  value = null,
  disabled = false,
  margin = '0',
  noBorder = false,
  square = false,
  centerLabel = false,
  checked = false,
  ...props
}) => {
  return (
    <>
      <div className={'input-wrapper'} {...props}>
        <label htmlFor="input-radio" className="label">
          {children}
        </label>
        <input
          type="radio"
          className={'input-radio'}
          value={value}
          onChange={onChange}
          disabled={disabled}
          checked={checked}
        />
      </div>

      <style jsx>{`
        .input-wrapper {
          display: grid;
          grid-template-columns: auto 50px;
          height: 40px;
        }
        .label {
          border-radius: 5px;
          margin: 3px auto 3px 5px;
          color: ${WHITE};
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 16px;
          font-weight: 500;
          text-align: right;
        }

        .input-radio {
          background-color: ${BLACK};
          width: 20px;
          height: 20px;
          margin: 10px;
        }
      `}</style>
    </>
  )
}
