import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { ViewContainerSectionWithoutDismiss } from './common'

class JobListItem extends Component {
  onRowPress() {
    Actions.jobDetail({ job: this.props.job })
  }

  renderImage(type) {
    const resource = `../img/${type}.png`
    return <Image source={require(resource)} style={{width: 40, height: 40}}/>
  }

  render() {
    const { name, address, company, type, loc } = this.props.job

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
          <View style={styles.jobContainer}>
            <ViewContainerSectionWithoutDismiss flex={1}>
              {this.renderImage(type)}
            </ViewContainerSectionWithoutDismiss>
            <ViewContainerSectionWithoutDismiss flex={3}>
              <Text style={styles.titleStyle}>
                { name }
              </Text>
              <Text style={styles.titleStyle}>
                { address }
              </Text>
            </ViewContainerSectionWithoutDismiss>
          </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  jobContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row'
  }
}

export default JobListItem
