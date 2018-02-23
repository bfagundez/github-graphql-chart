import React, { Component } from 'react'
import GraphQLApi from 'services/gitGraphQL'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div styleName='App'>
        <p> Volume of Files Changed by Date </p>
      </div>
    )
  }
}

export default App
