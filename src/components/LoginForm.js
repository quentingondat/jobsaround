import React, { Component } from 'react'
import { Text, TouchableOpacity, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ViewContainerPadded, ViewContainerSection, Input, Spinner } from './common'

class LoginForm extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} >
        <Text style={styles.loginButtonStyle}>
          Login
        </Text>
      </TouchableOpacity>
    )
  }

  renderSubHeader() {
    if (!this.props.focus) {
      return (
        <ViewContainerSection flex={2}>
          <Text style={styles.subHeaderTextStyle}>
          Bienvenue,
          </Text>
          <Text style={styles.subHeaderTextLightStyle}>
          connectez vous pour trouver des jobs autour de vous.
          </Text>
        </ViewContainerSection>
      )
    }
  }

  render() {
    const {
      headerTextStyle,
      subHeaderTextStyle,
      subHeaderTextLightStyle,
      loginButtonStyle,
      suscribeTextStyle,
      suscribeButtonStyle
    } = styles

    return (
      <ViewContainerPadded>
        <ViewContainerSection flex={2}>
          <Text style={headerTextStyle}>
          Jobs around
          </Text>
        </ViewContainerSection>

      {this.renderSubHeader()}

      <ViewContainerSection flex={3}>
        <Input
              placeholder="Email"
              onChangeText={text => this.props.loginChanged({prop: 'email', value: text })}
              value={this.props.email}
              onBlur={this.props.loginBlur.bind(this)}
              onFocus={this.props.loginFocus.bind(this)}
          />
        <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={text => this.props.loginChanged({prop: 'password', value: text })}
              value={this.props.password}
              onBlur={this.props.loginBlur.bind(this)}
              onFocus={this.props.loginFocus.bind(this)}
          />
        <Text style={styles.errorTextStyle}>
         {this.props.error}
        </Text>
        </ViewContainerSection>

        <ViewContainerSection flex={1}>
          {this.renderButton()}
        </ViewContainerSection>
        <ViewContainerSection flex={1}>
            <Text style={suscribeTextStyle}>
              Pas de compte ?
            </Text>
            <TouchableOpacity>
              <Text style={suscribeButtonStyle}>
              Inscrivez-vous !
            </Text>
            </TouchableOpacity>
        </ViewContainerSection>
      </ViewContainerPadded>
    )
  }
}

const styles = {
  headerTextStyle: {
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 45,
    color: '#1B5A7A'
  },
  subHeaderTextStyle: {
    fontFamily: 'Lato',
    fontWeight: '300',
    fontSize: 20
  },
  subHeaderTextLightStyle: {
    fontFamily: 'Lato',
    fontWeight: '300',
    fontSize: 20,
    color: '#575761'
  },
  loginButtonStyle: {
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 35,
    color: '#1B5A7A'
  },
  suscribeTextStyle: {
    fontFamily: 'Lato',
    fontWeight: '300',
    color: '#575761',
    fontSize: 15
  },
  suscribeButtonStyle: {
    fontFamily: 'Lato',
    fontWeight: '300',
    color: '#1B5A7A',
    fontSize: 15
  },
  errorTextStyle: {
    fontFamily: 'Lato',
    fontWeight: '300',
    fontSize: 15,
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, focus } = auth

  return { email, password, error, loading, focus }
}

export default connect(mapStateToProps, actions)(LoginForm)
