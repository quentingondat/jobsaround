import React from 'react';
import { View } from 'react-native';

const ViewContainerSectionWithoutDismiss = (props) => {
  const flex = props.flex || 1
  const flexDirection = props.flexDirection || 'column'

  return (
    <View style={[styles.containerStyle, { flex, flexDirection }]}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'center',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { ViewContainerSectionWithoutDismiss };
