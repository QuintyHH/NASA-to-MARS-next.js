import { useState } from 'react'
import { useCustomSelector } from '../../store/ContextProvider'
import { InputRadio, InputField, SimpleButton } from '../Reusables'
import { updateMode } from '../../actions/mission'
import { addNotification } from '../../actions/web'
import { mode as modeType } from '../../constants/mission'
import config from './ModeControl.config'

export const ModeControl = () => {
  const {
    missionState: { mode },
    webState: { isLoading },
    setMissionState,
    setWebState,
  } = useCustomSelector()

  const [selectedMode, setSelectedMode] = useState(mode)

  const handleSubmit = () => {
    setMissionState(updateMode(selectedMode))
    setWebState(addNotification(config.notification.success(selectedMode)))
  }

  const handleOptionChange = ({ target: { value } } = e) =>
    setSelectedMode(value)

  return (
    <div className="mode-control-wrapper">
      <InputField
        disabled={true}
        width={'100%'}
        value={mode.toUpperCase()}
        noBorder
        square
        centerLabel
      >
        {config.mode.label}
      </InputField>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <InputRadio
          value={modeType.SEQUENTIAL}
          checked={selectedMode === modeType.SEQUENTIAL}
          disabled={isLoading}
          onChange={handleOptionChange}
        >
          {modeType.SEQUENTIAL}
        </InputRadio>
        <InputRadio
          value={modeType.PARALLEL}
          checked={selectedMode === modeType.PARALLEL}
          disabled={isLoading}
          onChange={handleOptionChange}
        >
          {modeType.PARALLEL}
        </InputRadio>
      </form>
      <SimpleButton
        onClick={handleSubmit}
        disabled={isLoading}
        width={'100%'}
        square
      >
        {config.updateButton}
      </SimpleButton>
    </div>
  )
}
