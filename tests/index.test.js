import { render, screen } from '@testing-library/react'
import Mission from '../pages'
import {
  useCustomSelector,
  missionInitState,
  webInitState,
} from '../store/ContextProvider'
jest.mock('../store/ContextProvider')

describe('Mission - The Home Page', () => {
  useCustomSelector.mockReturnValue({
    missionState: missionInitState,
    webState: webInitState,
  })

  it('loading hooks and reducer values', () => {
    render(<Mission />)
    expect(useCustomSelector).toHaveBeenCalled()
  })

  it('renders UI without crashing', () => {
    render(<Mission />)
    expect(screen.getByText('Mission to MARS')).toBeInTheDocument()
  })

  it('matches expected snapshot', () => {
    let testedUnit = render(<Mission />)
    expect(testedUnit).toMatchSnapshot()
  })
})
