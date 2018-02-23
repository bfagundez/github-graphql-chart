import React, { Component } from 'react'
import GraphQLApi from 'services/gitGraphQL'
import ChartContainer from 'components/ChartContainer'
import './app.scss'

class App extends Component {
  render () {

    const activity = {
      label: 'Number of commits and dates ',
      values: [
        {x: new Date(2015, 2, 5), y: 1},
        {x: new Date(2015, 2, 6), y: 2},
        {x: new Date(2015, 2, 7), y: 0}
      ]}

    return (
      <div styleName='App'>
        <p> Volume of Files Changed by Date </p>
        <ChartContainer data={activity} />
      </div>
    )
  }
}

export default App
