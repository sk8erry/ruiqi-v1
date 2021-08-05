import * as React from 'react'

export const useScroll = (): [scrolling: boolean, scrollTop: number] => {
  const [scrolling, setScrolling] = React.useState(false)
  const [scrollTop, setScrollTop] = React.useState(0)
  React.useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(true)
      setTimeout(() => setScrolling(false), 10)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return [scrolling, scrollTop]
}
