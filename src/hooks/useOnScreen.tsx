import * as React from 'react'

export const useOnScreen = (ref: any) => {
  const [isInView, setIsInView] = React.useState(false)

  // const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting))

  // React.useEffect(() => {
  //   observer.observe(ref.current)
  //   // Remove the observer as soon as the component is unmounted
  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [])

  return isInView
}
