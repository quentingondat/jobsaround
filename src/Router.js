import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import JobList from './components/JobList'
import JobDetail from './components/JobDetail'
import JobForm from './components/JobForm'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 64 }}>
      <Scene key='auth'>
        <Scene sceneStyle={{ paddingTop: 0 }} key='login' component={LoginForm} hideNavBar={true} initial={true}/>
      </Scene>
      <Scene navigationBarStyle={{backgroundColor: '#1AA59A', borderColor: '#1AA59A' }} titleStyle={{ color: 'white' }} barButtonIconStyle={{ tintColor: 'white' }} key='main'>
        <Scene key='mainPage' title='Job List' component={JobList} onRight={() => Actions.manager()} rightButtonImage={require('./img/ic_add_white.png')}/>
        <Scene key='jobDetail' title='Job Detail' component={JobDetail} />
      </Scene>
      <Scene navigationBarStyle={{backgroundColor: '#1AA59A', borderColor: '#1AA59A' }} titleStyle={{ color: 'white' }} barButtonIconStyle={{ tintColor: 'white' }} key='manager'>
        <Scene key='jobForm' title='Add a new Job' component={JobForm} />
      </Scene>
    </Router>
  )
}

export default RouterComponent
