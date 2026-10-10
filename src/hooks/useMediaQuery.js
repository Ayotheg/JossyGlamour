import { useSyncExternalStore } from 'react'

// Matches the `desk:` breakpoint in src/index.css.
export const DESKTOP_QUERY = '(min-width: 53.75rem)'

export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
  )
}
