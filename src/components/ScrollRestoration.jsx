import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollRestoration() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const positions = useRef(new Map())

  useEffect(() => {
    const onScroll = () => {
      positions.current.set(location.key, window.scrollY)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.key])

  useLayoutEffect(() => {
    const savedY = positions.current.get(location.key)

    if (navigationType === 'POP' && typeof savedY === 'number') {
      window.scrollTo(0, savedY)
      return
    }

    window.scrollTo(0, 0)
  }, [location.key, navigationType])

  return null
}
