import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home/home'
import Nav from './nav/nav'
import Converter from './converter/converter'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/converter" exact component={Converter}/>
    </div>
    </Router>
  )
}

export default App;
