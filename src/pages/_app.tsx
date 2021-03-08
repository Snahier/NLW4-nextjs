import { ThemeProvider } from "styled-components"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import { GlobalStyle } from "../styles/global"
import { light } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChallengesProvider>
  )
}

export default MyApp
