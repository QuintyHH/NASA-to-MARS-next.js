import actions from '../constants/actions'
import { webInitState } from '../store/ContextProvider'

const webReducer = (state = webInitState, action) => {
  switch (action.type) {
    case actions.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case actions.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case actions.ADD_NOTIFICATION: {
      return {
        ...state,
        notification: action.payload,
      }
    }
    case actions.REMOVE_NOTIFICATION: {
      return {
        ...state,
        notification: null,
      }
    }
    default:
      return state
  }
}

export { webReducer }
