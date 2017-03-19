import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'
import { ViewContainerSection } from './common'

class JobDetail extends Component {
  formatDate(date) {
    var d = new Date(date)
    var curr_date = d.getDate()
    var curr_month = d.getMonth()
    var curr_year = d.getFullYear()
    return curr_month + "/" + curr_date
  }

  render() {
    const { name, type, address, company, price, loc, description, start_date, end_date } = this.props.job
    return (
      <ScrollView>
          <MapView
            style={{ height: 300 }}
            initialRegion={{
              latitude: loc[1],
              longitude: loc[0],
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0221,
            }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}>
            <MapView.Marker
                coordinate={{ latitude:loc[1], longitude: loc[0] }}
                title={ name }
                description={ description }
              />
          </MapView>
          <View>
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.titleStyle}>{ type.toUpperCase() }</Text>
              </View>
              <View>
                <Text style={styles.headDateStyle}>{this.formatDate(start_date)} - {this.formatDate(end_date)}</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.titleStyle}>
                    BOOK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.headTextStyle}>Job Description</Text>
              <Text style={styles.bodyTextStyle}> { name } </Text>
              <Text style={styles.bodyTextStyle}> { company } </Text>
              <Text style={styles.bodyTextStyle}> { address } </Text>
              <Text style={styles.bodyTextStyle}> { price }€ </Text>
              <Text style={styles.bodyTextStyle}> { description } </Text>
            </View>
          </View>
      </ScrollView>
    )
  }
}

const styles = {
  headerContainer: {
    backgroundColor: '#1AA59A',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bodyContainer: {
    padding: 10,
  },
  titleStyle: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 18
  },
  headTextStyle: {
    color: '#1AA59A',
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 18
  },
  headDateStyle: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 12
  },
  bodyTextStyle: {
    color: '#575761',
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 12,
    paddingTop: 5
  }
}
const mapStyle = [
    {
        "featureType": "all",
        "stylers": [
            {
                "saturation": 0
            },
            {
                "hue": "#e7ecf0"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            }
        ]
    }
]

const mapStateToProps = (state) => {
  return { geo: state.jobs.geo }
}


export default connect(mapStateToProps, null)(JobDetail)
