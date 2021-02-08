import {
  resetMission,
  updateMission,
  updateGridSize,
  updateRover,
  updateMode,
  setCurrentRover,
  setCurrentMove,
  updateMissionStatus,
  addToLog,
} from '../actions/mission'

import {
  startLoading,
  stopLoading,
  addNotification,
  removeNotification,
} from '../actions/web'

import actions from '../constants/actions'

describe('All the mission actions', () => {
  const data = 'testData'
  const mockRover = {
    name: 'name',
    index: 0,
  }
  it('should create an action to reset mission', () => {
    expect(resetMission()).toEqual({
      type: actions.RESET_MISSION,
    })
  })

  it('should create an action to update mission', () => {
    expect(updateMission(data)).toEqual({
      type: actions.UPDATE_MISSION,
      payload: data,
    })
  })

  it('should create an action to update grid', () => {
    expect(updateGridSize(data)).toEqual({
      type: actions.UPDATE_GRID,
      payload: data,
    })
  })

  it('should create an action to update rover', () => {
    expect(updateRover(data)).toEqual({
      type: actions.UPDATE_ROVER,
      payload: data,
    })
  })

  it('should create an action to update mode', () => {
    expect(updateMode(data)).toEqual({
      type: actions.UPDATE_MODE,
      payload: data,
    })
  })

  it('should create an action to set current rover', () => {
    expect(setCurrentRover(mockRover)).toEqual({
      type: actions.SET_CURRENT_ROVER,
      payload: mockRover,
    })
  })

  it('should create an action to set current move', () => {
    expect(setCurrentMove(data)).toEqual({
      type: actions.SET_CURRENT_MOVE,
      payload: data,
    })
  })

  it('should create an action to update mission status', () => {
    expect(updateMissionStatus(data)).toEqual({
      type: actions.UPDATE_STATUS,
      payload: data,
    })
  })

  it('should create an action to log and entry to the console', () => {
    expect(addToLog(data)).toEqual({
      type: actions.ADD_LOG,
      payload: data,
    })
  })
})

describe('All the web actions', () => {
  const data = 'testData'

  it('should set web status to start loading', () => {
    expect(startLoading()).toEqual({
      type: actions.START_LOADING,
    })
  })

  it('should set web status to stop loading', () => {
    expect(stopLoading()).toEqual({
      type: actions.STOP_LOADING,
    })
  })

  it('should create an action to remove the notification', () => {
    expect(removeNotification()).toEqual({
      type: actions.REMOVE_NOTIFICATION,
    })
  })

  it('should create an action to add new notification', () => {
    expect(addNotification(data)).toEqual({
      type: actions.ADD_NOTIFICATION,
      payload: data,
    })
  })
})
