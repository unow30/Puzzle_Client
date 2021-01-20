import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/GlobalStyles'
import theme from './style/theme'
<<<<<<< HEAD
import Home from './components/page/Home/Home'
import Landing from './components/page/Landing/Landing'
=======
import Home from './components/page/Home/Home' 
import Project from './components/page/Project/Project'
import Puzzle from './components/page/Puzzle/Puzzle' 
import Calendar from './components/page/Calendar/Calendar'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b

const App = () => {
  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <Landing></Landing>
      <GlobalStyles />
=======
      <GlobalStyles></GlobalStyles>
      <Router>
        <Switch>
          <Route path = '/home' component = {Home}></Route>
          <Route path = '/project' component = {Project}></Route>
          <Route path = '/puzzle' component = {Puzzle}></Route>
          <Route path = '/calendar' component = {Calendar}></Route>
        </Switch>
      </Router>
>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    </ThemeProvider>
  )
}

export default App
