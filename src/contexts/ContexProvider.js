import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextPorvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClick, setIsClick] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)

  const handleClick = (clicked) => {
    setIsClick({ ...initialState, [clicked]: true })
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClick,
        setIsClick,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
