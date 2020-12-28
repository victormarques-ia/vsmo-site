import { useState, useEffect } from 'react'

interface WindowSizeProps {
  innerHeight: number
  innerWidth: number
  outerHeight: number
  outerWidth: number
}

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  }
}

const useWindowSize = (): WindowSizeProps => {
  const [windowSize, setWindowSize] = useState(getSize())

  const handleResize = () => {
    setWindowSize(getSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
