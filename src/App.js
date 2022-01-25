import React from 'react'
import Navbar from './componants/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './componants/About.js'
import Home from './componants/Home.js'
import Anitext from './componants/Anitext'
import Footer from './componants/Footer.js'


const App = () => {

  
  return (
    <Router>
      <div className='nav'>
      <Navbar />
            <div className='content'>
              <Switch>
                <Route path="/" exact>
                  <Home />
                  </Route> 
                  <Route path="/about">
                    <About />
                  </Route>
              </Switch> 
              </div>
              </div>
              <Footer />
    </Router>
  )
}

export default App
