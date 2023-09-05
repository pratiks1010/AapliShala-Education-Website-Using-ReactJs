
import "./App.css"
import React from 'react'
import Header from './components/common/heading/Header'
import {
  BrowserRouter as Router,
  Switch,Route
} from "react-router-dom";
import Home from "./components/home/Home";


const App = () => {
  return (
    <div>


      <Router>
        <Header/>
        <Switch>

          <Route path="/" exact component={Home}>
            
          </Route>

        </Switch>


      </Router>



    </div>
  )
}

export default App