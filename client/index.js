import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51ITC4REclLCTO1i8Ii7KMFc5Hhh7q8L9goymmiQkkiibIR2qUqh8OdM8ATmRoNC4NCGa7G4MBs3ZKN7lPqRQ7lFR00MRhDCusb'
)

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Elements stripe={promise}>
      <Router history={history}>
        <App />
      </Router>
    </Elements>
  </Provider>,
  document.getElementById('app')
)
