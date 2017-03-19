import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

const ViewContainer = (props) => {
  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
      <View
        style={[ styles.containerStyle, props.style ]}>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  containerStyle: {
    flex: 1
  }
};

export { ViewContainer };
