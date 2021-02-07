import actions from '../constants/actions'

export const resetMission = () => ({
  type: actions.RESET_MISSION,
})

export const updateMission = (missionData) => ({
  type: actions.UPDATE_MISSION,
  payload: missionData,
})

export const updateGridSize = (grid) => ({
  type: actions.UPDATE_GRID,
  payload: grid,
})

export const updateRover = (roverRata) => ({
  type: actions.UPDATE_ROVER,
  payload: roverRata,
})

export const updateMode = (mode) => ({
  type: actions.UPDATE_MODE,
  payload: mode,
})

export const setCurrentRover = (roverName) => ({
  type: actions.SET_CURRENT_ROVER,
  payload: roverName,
})

export const setCurrentMove = (moveCount) => ({
  type: actions.SET_CURRENT_MOVE,
  payload: moveCount,
})

export const updateMissionStatus = (status) => ({
  type: actions.UPDATE_STATUS,
  payload: status,
})

export const addToLog = (entry) => ({
  type: actions.ADD_LOG,
  payload: entry,
})
