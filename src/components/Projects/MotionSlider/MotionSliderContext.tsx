import React, { createContext, useCallback, useContext, useState } from 'react'

interface SliderProps {
  items: Array<number>
  activeItem: number
}

interface MotionContextProps {
  addItem(item: number): void
  setActiveItem(activeItem: number): void
  state: SliderProps
}
const MotionContext = createContext<MotionContextProps>(
  {} as MotionContextProps
)

export const MotionContextProvider: React.FC = ({ children }) => {
  const [slider, setSlider] = useState<SliderProps>({
    items: [],
    activeItem: 0
  })

  const addItem = useCallback((item: number) => {
    setSlider({
      ...slider,
      items: [...slider.items, item]
    })
  }, [])

  const setActiveItem = useCallback((activeItem: number) => {
    setSlider({
      ...slider,
      activeItem: activeItem
    })
  }, [])

  return (
    <MotionContext.Provider value={{ addItem, setActiveItem, state: slider }}>
      {children}
    </MotionContext.Provider>
  )
}

export const useMotionSlider = (): MotionContextProps => {
  const context = useContext(MotionContext)

  if (!context) {
    throw new Error(
      'useMotionSlider must be used within a MotionContextProvider'
    )
  }

  return context
}

export default MotionContextProvider
