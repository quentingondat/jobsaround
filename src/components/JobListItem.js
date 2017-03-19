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
    const source = { uri: `https://cdn.rawgit.com/quentingondat/jobsaround/760364d1/src/img/${type}.png`}
    return <Image source={source} style={{width: 40, height: 40}}/>
  }

  formatDate(date) {
    var d = new Date(date)
    var curr_date = d.getDate()
    var curr_month = d.getMonth()
    var curr_year = d.getFullYear()
    return curr_month + "/" + curr_date + "/" + curr_year
  }

  render() {
    const { name, address, company, type, loc, price, start_date, end_date } = this.props.job

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
          <View style={styles.jobContainer}>
            <View style={styles.avatarContainer}>
              {this.renderImage(type)}
              <Text style={styles.avatarText}>{ type.toUpperCase() }</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleStyle}>
                { name }
              </Text>
              <Text style={styles.companyStyle}>
                { company }
              </Text>
              <Text style={styles.datesStyle}>
                { this.formatDate(start_date) } - { this.formatDate(end_date) }
              </Text>
              <Text style={styles.adressStyle}>
                { address }
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceStyle}>
                { price }€
              </Text>
            </View>
          </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '600',
    color: '#1B5A7A'
  },
  companyStyle: {
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: '500',
    color: '#575761',
    paddingBottom: 5
  },
  datesStyle: {
    fontSize: 12,
    fontFamily: 'Lato',
    fontWeight: '500',
    color: '#ccc'
  },
  adressStyle: {
    fontSize: 10,
    fontFamily: 'Lato',
    fontWeight: '500',
    color: '#ccc'
  },
  jobContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row'
  },
  avatarContainer: {
    height: 100,
    width: 60,
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'center'
  },
  avatarText: {
    fontFamily: 'Lato',
    fontSize: 8,
    fontWeight: '600',
    color: '#575761',
    paddingTop: 5
  },
  textContainer: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  priceContainer: {
    width: 50,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1AA59A'
  }
}

export default JobListItem
