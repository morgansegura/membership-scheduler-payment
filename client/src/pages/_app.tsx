// [Providers]
import AppProvider from 'components/providers/AppProvider'

export default function App({ Component, pageProps }) {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    )
}
