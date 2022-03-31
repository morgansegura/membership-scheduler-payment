import React from 'react'
// [Hooks]
import { useStorage } from 'hooks'

interface GetThemeProps {}

function useGetTheme(props?: GetThemeProps) {
  const { getStorage } = useStorage()
  const [theme, setTheme] = React.useState(getStorage('preferences'))

  React.useEffect(() => {
    if (!theme) {
      // setTheme(true)
    }
  }, [theme])
  return theme
}

export default useGetTheme
