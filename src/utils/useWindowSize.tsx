import { useState, useEffect } from 'react'

interface WindowSizeProps {
  innerHeight: number | undefined
  innerWidth: number | undefined
  outerHeight: number | undefined
  outerWidth: number | undefined
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
  const [windowSize, setWindowSize] = useState<WindowSizeProps>({
    innerHeight: undefined,
    innerWidth: undefined,
    outerHeight: undefined,
    outerWidth: undefined
  })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize(getSize())
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return windowSize
}

export default useWindowSize
