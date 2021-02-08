import actions from '../constants/actions'
import { missionInitState } from '../store/ContextProvider'

const missionReducer = (state = missionInitState, action) => {
  switch (action.type) {
    case actions.UPDATE_MISSION:
      return {
        ...state,
        rovers: action.payload,
      }
    case actions.UPDATE_GRID:
      return {
        ...state,
        grid: { ...state.grid, ...action.payload },
      }
    case actions.RESET_MISSION:
      return {
        ...missionInitState,
        mode: state.mode,
        grid: state.grid,
      }

    case actions.ADD_LOG:
      return {
        ...state,
        log: [...state.log, action.payload],
      }
    case actions.UPDATE_ROVER:
      return {
        ...state,
        rovers: state.rovers.map((rover) =>
          rover.name === action.payload.name
            ? {
                ...rover,
                ...action.payload,
              }
            : rover
        ),
      }
    case actions.UPDATE_MODE:
      return {
        ...state,
        mode: action.payload,
      }
    case actions.SET_CURRENT_MOVE:
      return {
        ...state,
        currentMove: action.payload,
      }
    case actions.SET_CURRENT_ROVER:
      return {
        ...state,
        currentRover: action.payload,
      }
    case actions.UPDATE_STATUS:
      return {
        ...state,
        status: action.payload,
      }
    default:
      return state
  }
}

export { missionReducer }
