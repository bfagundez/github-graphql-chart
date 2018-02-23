import React, { Component } from 'react'
import GraphQLApi from 'services/gitGraphQL'
import ChartContainer from 'components/ChartContainer'
import UserPicker from 'components/UserPicker'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './app.scss'

export class App extends Component {
  componentWillMount () {

    this.store = this.props.store
    this.onfetchGitData()
  }

  onfetchGitData = (username = 'bfagundez') => {
    const api = new GraphQLApi()
    this.props.dispatch({
      type: 'FETCH_REPO_DATA',
      payload: api.query(username)
    })
  }

  render () {
    let scatterPlot = null
    let loading = null

    if (this.props.gitData.activity) {
      scatterPlot = <ChartContainer data={this.props.gitData.activity} />
    }

    if (this.props.gitData.fetching) {
      loading = <p>Loading... </p>
      scatterPlot = null
    }

    return (
      <div styleName='App'>
        <p> Volume of Files Changed by Date </p>
        <UserPicker currentUser='bfagundez' onFetchUserData={this.onfetchGitData} />
        {loading}
        {scatterPlot}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { gitData: state.gitData }
}

App.propTypes = {
  gitData: PropTypes.object
}

export default connect(mapStateToProps)(App)
