import React, { createContext, useContext, useReducer } from 'react'
import { missionReducer, webReducer } from '../reducers'
import { status, mode } from '../constants/mission'
const WebContext = createContext()

export const missionInitState = {
  rovers: [],
  log: [],
  mode: mode.SEQUENTIAL,
  status: status.INACTIVE,
  grid: {
    height: 20,
    width: 30,
    cellSide: 40,
  },
  currentRover: '',
  currentMove: 0,
}

export const webInitState = {
  notification: null,
  isLoading: false,
}

export const ContextProvider = ({ children }) => {
  const [missionState, setMissionState] = useReducer(
    missionReducer,
    missionInitState
  )
  const [webState, setWebState] = useReducer(webReducer, webInitState)

  return (
    <WebContext.Provider
      value={{
        missionState,
        setMissionState,
        webState,
        setWebState,
      }}
    >
      {children}
    </WebContext.Provider>
  )
}

export const useCustomSelector = () => useContext(WebContext)
