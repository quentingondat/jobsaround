import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends Component {
  state = { borderColor: { borderColor: '#ddd' }}

  renderLabel() {
    if(typeof(this.props.label) !== 'undefined') {
      return <Text style={styles.labelStyle}>{this.props.label}</Text>
    }
  }

  renderContainerStyle() {
    if(typeof(this.props.label) === 'undefined') {
      return styles.containerStyleWithoutLabel
    } else {
      return styles.containerStyleWithLabel
    }
  }

  onFocus() {
    this.setState({
        borderColor: { borderColor: '#1AA59A' }
    })
    this.props.onFocus()
  }

  onBlur() {
    this.setState({
        borderColor: { borderColor: '#ddd' }
    })
  }

  render() {
  const { label, value, onChangeText, placeholder, secureTextEntry, style } = this.props

    return (
      <View style={[this.renderContainerStyle(), this.state.borderColor]}>
        {this.renderLabel()}
        <TextInput
          secureTextEntry={secureTextEntry}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          placeholder={placeholder}
          autoCorrect={false}
          style={[styles.inputStyle, style]}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    )
  }
}

const styles = {
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 30,
    flex: 1
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 5,
    lineHeight: 30,
    flex: 1
  },
  containerStyleWithLabel: {
    height: 60,
    borderBottomWidth: 2,
    borderColor: '#ddd',
    marginTop: 10,
    marginBottom: 10
  },
  containerStyleWithoutLabel: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: '#ddd',
    marginTop: 5,
    marginBottom: 5
  }
}

export { Input }
