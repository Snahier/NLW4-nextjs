import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"
import { light } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
