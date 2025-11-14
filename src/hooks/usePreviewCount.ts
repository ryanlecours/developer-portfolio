'use client'
import * as React from 'react'

export function usePreviewCount() {
  const [count, setCount] = React.useState(1)
  React.useEffect(() => {
    const md = window.matchMedia('(min-width: 768px)')
    const lg = window.matchMedia('(min-width: 1024px)')
    const update = () => setCount(lg.matches ? 3 : md.matches ? 2 : 1)
    update()
    md.addEventListener('change', update)
    lg.addEventListener('change', update)
    return () => {
      md.removeEventListener('change', update)
      lg.removeEventListener('change', update)
    }
  }, [])
  return count
}
