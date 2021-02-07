import actions from '../constants/actions'

export const startLoading = () => ({
  type: actions.START_LOADING,
})

export const stopLoading = () => ({
  type: actions.STOP_LOADING,
})

export const addNotification = (notification) => ({
  type: actions.ADD_NOTIFICATION,
  payload: notification,
})

export const removeNotification = () => ({
  type: actions.REMOVE_NOTIFICATION,
})
