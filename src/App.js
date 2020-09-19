import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './Login';

function App() {

  return (
    <Router>
      <div className="App">
      
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
