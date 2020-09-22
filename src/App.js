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
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';


const promise = loadStripe('pk_test_51HTMhlBX8MOzTQz1FFbEcYKLU1PCW6zsKNejjiuyQqCP01HvyY5KRt7Fy7LIbqpny49bAy44gBF4tGPz95lVwxrP00CdyHcTGr');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only runs when the app component loads
    auth.onAuthStateChanged(authUser => {
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

        <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/payment">
          <Header />
          <Elements stripe = {promise}>
            <Payment />
          </Elements>
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
