import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Saved from './pages/Saved';
import Home from './pages/Home';

//TODO:
const App = () =>

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>;

export default App;
