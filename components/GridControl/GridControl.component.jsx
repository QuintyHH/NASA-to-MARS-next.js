import { useState, useEffect } from 'react'
import { useCustomSelector } from '../../store/ContextProvider'
import { updateGridSize } from '../../actions/mission'
import { addNotification } from '../../actions/web'
import { SimpleButton, InputField } from '../Reusables'
import config from './GridControl.config'

export const GridControl = () => {
  const {
    missionState: { grid },
    setMissionState,
    webState,
    setWebState,
  } = useCustomSelector()

  const [gridSize, setGridSize] = useState(grid)
  const [fieldError, setFieldError] = useState(false)
  const disabledState = webState.isLoading || fieldError
  useEffect(() => {
    setFieldError(
      Object.values(gridSize).filter((entry) => entry > 0 && entry <= 100)
        .length !== Object.keys(gridSize).length
    )
  }, [gridSize])
  /*validation ... Refactor maybe for readability? 
  To keep complexity linear, we are just comparing array lenghts, and if they don't match, 
  that means something went sideways.
  In the first array, we iterate through all the gridSize values and check to see if every element matches
  our conditions (namely, is a number, is above 0 and less then 100)
  Then we filter out all the elements that dont match.
  The second array is just a count of how many elements there are in gridSize 
  (shape is gridSize: {
    width: number,
    height: number
  })
  Then we compare the length of the 2 arrays and if they dont match, we didnt pass validation 
  and we set fieldError to true.
*/
  const handleSubmit = () => {
    setMissionState(updateGridSize(gridSize))
    setWebState(addNotification(config.notification.success))
  }

  const handleWidthChange = ({ target: { value } } = e) =>
    setGridSize({ ...gridSize, width: value })

  const handleHeightChange = ({ target: { value } } = e) =>
    setGridSize({ ...gridSize, height: value })

  // for both these handles, i just wanted the value out of event. Refactor for readability?

  return (
    <div className={'grid-control-wrapper'}>
      <InputField
        disabled={true}
        width={'100%'}
        value={`${grid.width} x ${grid.height}`}
        error={fieldError}
        noBorder
        square
        centerLabel
      >
        {fieldError ? config.grid.error : config.grid.label}
      </InputField>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <InputField
          value={gridSize.width}
          onChange={handleWidthChange}
          width={'40%'}
          margin={'0 5%'}
        >
          {config.width.label}
        </InputField>
        <InputField
          value={gridSize.height}
          onChange={handleHeightChange}
          width={'40%'}
          margin={'0 5%'}
        >
          {config.height.label}
        </InputField>
      </form>
      <SimpleButton
        onClick={handleSubmit}
        disabled={disabledState}
        width={'100%'}
        square
      >
        {config.updateButton.text}
      </SimpleButton>
    </div>
  )
}
