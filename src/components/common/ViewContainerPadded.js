import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

const ViewContainerPadded = (props) => {
  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
    <View
      style={[ styles.containerStyle, props.style ]}
    >
      {props.children}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15
  }
};

export { ViewContainerPadded };
