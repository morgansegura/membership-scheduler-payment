import React from 'react'
// [Providers]
import AppProvider from 'components/providers/AppProvider'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps, ...delegated }: AppProps) {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <div {...delegated}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </div>
  )
}
