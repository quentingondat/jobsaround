import React, { Component } from 'react'
import { Text, TouchableOpacity, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ViewContainerPadded, ViewContainerSection, Input, Spinner } from './common'

class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  render() {
    const {
      headerTextStyle,
      loginButtonStyle,
    } = styles

    return (
      <ViewContainerPadded>
        <ViewContainerSection flex={1}>
          <Input
                placeholder="Barman - Café Chappe"
                label="Job Title"
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
          <Text>Button</Text>
        </ViewContainerSection>
        <ViewContainerSection flex={1}>
            <Text>
              Pas de compte ?
            </Text>
            <TouchableOpacity>
              <Text>
              Inscrivez-vous !
            </Text>
            </TouchableOpacity>
        </ViewContainerSection>
      </ViewContainerPadded>
    )
  }
}

const styles = {
  loginButtonStyle: {
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 35,
    color: '#1AA59A'
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
    color: '#4D7298',
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
