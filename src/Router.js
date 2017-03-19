import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import JobList from './components/JobList'
import JobDetail from './components/JobDetail'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 64 }}>
      <Scene key='auth'>
        <Scene sceneStyle={{ paddingTop: 0 }} key='login' component={LoginForm} hideNavBar={true} initial={true}/>
      </Scene>
      <Scene navigationBarStyle={{backgroundColor: '#1AA59A', borderColor: '#1AA59A'}} key='main'>
        <Scene key='mainPage' component={JobList} />
        <Scene key='jobDetail' component={JobDetail} />
      </Scene>
    </Router>
  )
}

export default RouterComponent
