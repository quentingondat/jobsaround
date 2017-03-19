import React, { Component } from 'react'
import { Text, View, ListView, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ViewContainer } from './common'
import JobListItem from './JobListItem'


class JobList extends Component {
  componentWillMount() {
    this.props.jobsFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  })
    this.dataSource = ds.cloneWithRows(props.jobs)
  }

  renderRow(job) {
    return <JobListItem job={job} />
  }

  render() {
    return (
      <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      refreshControl={
          <RefreshControl
            refreshing={this.props.refreshing}
            onRefresh={this.props.jobsFetch.bind(this)}
          />
      }/>
    )
  }
}

const mapStateToProps = (state) => {
  const { jobs, refreshing } = state.jobs
  return { jobs, refreshing }
}

export default connect(mapStateToProps, actions)(JobList)
