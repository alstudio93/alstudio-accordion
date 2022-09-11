import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
