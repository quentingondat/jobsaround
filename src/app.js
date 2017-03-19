import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyBOUYQvN-7l7ee23FFE8c0tLMp_518y1Ec",
    authDomain: "jobsaroundme-233df.firebaseapp.com",
    databaseURL: "https://jobsaroundme-233df.firebaseio.com",
    storageBucket: "jobsaroundme-233df.appspot.com",
    messagingSenderId: "567559527994"
  }

    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
