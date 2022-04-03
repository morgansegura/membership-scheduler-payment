import React from 'react'

interface ScrollPositionProps {}

function useScrollPosition(props?: ScrollPositionProps) {
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])
  return scrollY
}

export default useScrollPosition
