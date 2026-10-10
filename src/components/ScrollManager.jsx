import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Scrolls to the section named in the URL hash, or to the top when there is none.
function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])

  return null
}

export default ScrollManager
