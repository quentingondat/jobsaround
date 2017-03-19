import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

const ViewContainerSection = (props) => {
  const flex = props.flex || 1
  const flexDirection = props.flexDirection || 'column'

  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
    <View style={[styles.containerStyle, { flex, flexDirection }]}>
      {props.children}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'center',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { ViewContainerSection };
