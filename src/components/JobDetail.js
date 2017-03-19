import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView from 'react-native-maps';
import { connect } from 'react-redux'
import { ViewContainerSection } from './common'

class JobDetail extends Component {
  render() {
    const { name, address, loc, description } = this.props.job
    return (
      <ScrollView>
          <MapView
            style={{ height: 350 }}
            initialRegion={{
              latitude: loc[1],
              longitude: loc[0],
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0221,
            }}>
            <MapView.Marker
                coordinate={{ latitude:loc[1], longitude: loc[0] }}
                title={ name }
                description={ description }
              />
          </MapView>
          <View>
            <Text> { name } </Text>
            <Text> { address } </Text>
            <Text> { description } </Text>
          </View>
      </ScrollView>

    )
  }
}

const mapStateToProps = (state) => {
  return { geo: state.jobs.geo }
}


export default connect(mapStateToProps, null)(JobDetail)
