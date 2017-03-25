import React from 'react';
import { View, Text } from 'react-native';

const FeatureList = (props) => {
  return (
      <View
        style={[ styles.containerStyle, props.style ]}>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <Text style={styles.textStyle}>{props.children}</Text>
      </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  labelStyle: {
    fontSize: 16

  },
  textStyle: {
    fontSize: 12
  }
};

export { FeatureList };
