import React, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only runs when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('user is  ', authUser);
      if(authUser) {
        // the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

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

        <Route path="/payment">
          <Header />
          <Payment />
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
