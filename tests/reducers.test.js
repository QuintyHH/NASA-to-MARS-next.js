import { webInitState, missionInitState } from '../store/ContextProvider'
import { missionReducer, webReducer } from '../reducers'
import actions from '../constants/actions'
import { status, mode } from '../constants/mission'

describe('Mission reducer', () => {
  const mockState = {
    rovers: [
      { name: 'testName1', position: 1 },
      { name: 'testName2', position: 2 },
    ],
    log: [{ notification: 'test' }],
    mode: mode.PARALLEL,
    status: status.ACTIVE,
    grid: {
      height: 60,
      width: 60,
      cellSide: 40,
    },
    currentRover: 'Rover1',
    currentMove: 45,
  }

  const mockGridOnly = {
    height: 10,
    width: 10,
  }

  const mockRoversOnly = [
    { name: 'testName1', position: 1 },
    { name: 'testName2', position: 2 },
  ]

  const mockSpecificRover = {
    name: 'testName2',
    position: 3,
  }

  const mockLogEntry = 'New log entry'

  it('should return the mission reducer to the initial state', () => {
    expect(missionReducer(undefined, {})).toEqual(missionInitState)
  })

  it('should handle UPDATE_GRID', () => {
    expect(
      missionReducer(missionInitState, {
        type: actions.UPDATE_GRID,
        payload: mockGridOnly,
      })
    ).toEqual({
      ...missionInitState,
      grid: { ...missionInitState.grid, height: 10, width: 10 },
    })
  })

  it('should handle UPDATE_MISSION', () => {
    expect(
      missionReducer(missionInitState, {
        type: actions.UPDATE_MISSION,
        payload: mockRoversOnly,
      })
    ).toEqual({
      ...missionInitState,
      rovers: mockRoversOnly,
    })
  })

  it('should handle RESET_MISSION', () => {
    expect(
      missionReducer(mockState, {
        type: actions.RESET_MISSION,
      })
    ).toEqual({
      ...missionInitState,
      mode: mockState.mode,
      grid: mockState.grid,
    })
  })

  it('should handle ADD_LOG', () => {
    expect(
      missionReducer(missionInitState, {
        type: actions.ADD_LOG,
        payload: mockLogEntry,
      })
    ).toEqual({
      ...missionInitState,
      log: [...missionInitState.log, mockLogEntry],
    })
  })

  it('should handle UPDATE_ROVER', () => {
    const expected = [
      { name: 'testName1', position: 1 },
      { name: 'testName2', position: 3 },
    ]
    expect(
      missionReducer(mockState, {
        type: actions.UPDATE_ROVER,
        payload: mockSpecificRover,
      })
    ).toEqual({
      ...mockState,
      rovers: expected,
    })
  })

  it('should handle UPDATE_MODE', () => {
    expect(
      missionReducer(missionInitState, {
        type: actions.UPDATE_MODE,
        payload: mode.SEQUENTIAL,
      })
    ).toEqual({
      ...missionInitState,
      mode: mode.SEQUENTIAL,
    })
  })

  it('should handle SET_CURRENT_MOVE', () => {
    const expected = 5
    expect(
      missionReducer(missionInitState, {
        type: actions.SET_CURRENT_MOVE,
        payload: expected,
      })
    ).toEqual({
      ...missionInitState,
      currentMove: expected,
    })
  })

  it('should handle SET_CURRENT_ROVER', () => {
    const expected = 'TestRover'
    expect(
      missionReducer(missionInitState, {
        type: actions.SET_CURRENT_ROVER,
        payload: expected,
      })
    ).toEqual({
      ...missionInitState,
      currentRover: expected,
    })
  })

  it('should handle UPDATE_STATUS', () => {
    expect(
      missionReducer(missionInitState, {
        type: actions.UPDATE_STATUS,
        payload: status.INACTIVE,
      })
    ).toEqual({
      ...missionInitState,
      status: status.INACTIVE,
    })
  })
})

describe('Web reducer', () => {
  it('should return the web reducer to the initial state', () => {
    expect(webReducer(undefined, {})).toEqual(webInitState)
  })

  it('should handle START_LOADING', () => {
    expect(
      webReducer(webInitState, {
        type: actions.START_LOADING,
      })
    ).toEqual({
      ...webInitState,
      isLoading: true,
    })
  })

  it('should handle STOP_LOADING', () => {
    expect(
      webReducer(webInitState, {
        type: actions.STOP_LOADING,
      })
    ).toEqual({
      ...webInitState,
      isLoading: false,
    })
  })

  it('should handle ADD_NOTIFICATION', () => {
    const mockNotification = 'TestNote'
    expect(
      webReducer(webInitState, {
        type: actions.ADD_NOTIFICATION,
        payload: mockNotification,
      })
    ).toEqual({
      ...webInitState,
      notification: mockNotification,
    })
  })

  it('should handle REMOVE_NOTIFICATION', () => {
    expect(
      webReducer(webInitState, {
        type: actions.REMOVE_NOTIFICATION,
      })
    ).toEqual({
      ...webInitState,
      notification: null,
    })
  })
})
