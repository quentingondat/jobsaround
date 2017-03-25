import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import JobList from './components/JobList'
import JobDetail from './components/JobDetail'
import JobForm from './components/JobForm'
import SvgUri from 'react-native-svg-uri';


class jobsIcon extends Component {
    render(){
        return (
          <SvgUri width="24" height="24" fill={this.props.selected ? "#A6ED8E" :'#FFFFFF'} source={require('./img/ic_apps_white_24px.svg')} />
        );
    }
}

class applicationsIcon extends Component {
    render(){
        return (
          <SvgUri width="24" height="24" fill={this.props.selected ? "#A6ED8E" :'#FFFFFF'} source={require('./img/ic_menu_white_24px.svg')} />
        );
    }
}

class managerIcon extends Component {
    render(){
        return (
          <SvgUri width="24" height="24" fill={this.props.selected ? "#A6ED8E" :'#FFFFFF'} source={require('./img/ic_work_white_24px.svg')} />
        );
    }
}

class profileIcon extends Component {
    render(){
        return (
          <SvgUri width="24" height="24" fill={this.props.selected ? "#A6ED8E" :'#FFFFFF'} source={require('./img/ic_account_circle_white_24px.svg')} />
        );
    }
}

class RouterComponent extends Component {
  render() {
  return (
    <Router>
      <Scene key='auth'>
        <Scene sceneStyle={{ paddingTop: 0 }} key='login' component={LoginForm} hideNavBar={true} initial={true}/>
      </Scene>
      <Scene key='main' title='main' tabs={true} tabBarStyle={{backgroundColor: '#1AA59A', borderColor: '#1AA59A' }}>
        <Scene  key='jobs' title='jobs' navigationBarStyle={{backgroundColor: '#1B5A7A', borderColor: '#1B5A7A' }} titleStyle={{ color: 'white' }} barButtonIconStyle={{ tintColor: 'white' }} icon={jobsIcon}>
          <Scene key='jobList'  sceneStyle={{ paddingTop: 64 }} title='Job List' component={JobList} onRight={() => Actions.manager()} rightButtonImage={require('./img/ic_add_white.png')}/>
          <Scene key='jobDetail' sceneStyle={{ paddingTop: 64 }} title='Job Detail' component={JobDetail} />
        </Scene>
        <Scene key='applications' title='applications' navigationBarStyle={{backgroundColor: '#1B5A7A', borderColor: '#1B5A7A' }} titleStyle={{ color: 'white', fontWeight: '400'}} barButtonIconStyle={{ tintColor: 'white' }} icon={applicationsIcon}>
          <Scene key='jobForm' title='Add a new Job' component={JobForm} />
        </Scene>
        <Scene key='manager'  title='manager' navigationBarStyle={{backgroundColor: '#1B5A7A', borderColor: '#1B5A7A' }} titleStyle={{ color: 'white', fontWeight: '400'}} barButtonIconStyle={{ tintColor: 'white' }} icon={managerIcon}>
          <Scene key='jobForm' title='Add a new Job' component={JobForm} />
        </Scene>
        <Scene key='profile'  title='profile' navigationBarStyle={{backgroundColor: '#1B5A7A', borderColor: '#1B5A7A' }} titleStyle={{ color: 'white', fontWeight: '400'}} barButtonIconStyle={{ tintColor: 'white' }} icon={profileIcon}>
          <Scene key='jobForm' title='Add a new Job' component={JobForm} />
        </Scene>
      </Scene>
    </Router>
  )




}

}

export default RouterComponent
