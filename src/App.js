import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/GlobalStyles'
import theme from './style/theme'
import Home from './components/page/Home/Home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
