import React from 'react'
import Navbar from './componants/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './componants/Home.js'
import About from './componants/About.js'
import Home from './componants/Home.js'
import Anitext from './componants/Anitext'

const App = () => {

  
  return (
    <header>
      <Router>
      <Navbar />
      <br></br>
      <Anitext />
      <Home />
      <About />
      <Switch>
        <Route path='/' exact />
      </Switch> 
      </Router>
    </header>
  )
}

export default App
