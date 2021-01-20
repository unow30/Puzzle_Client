import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/GlobalStyles'
import theme from './style/theme'
import Home from './components/page/Home/Home'
import Landing from './components/page/Landing/Landing'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Landing></Landing>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
