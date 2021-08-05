import * as React from 'react'
import { useEffect } from 'react'

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100)
    return () => {
      setTimeout(() => setIsMounted(false), 100)
    }
  }, [])
  return isMounted
}
