import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserPicker extends Component {
  constructor (props) {
    super(props)
    this.state = { currentUser: this.props.currentUser }
  }

  render () {
    return (<div>
      <input type='text'
        value={this.state.currentUser}
        onChange={(e) => this.setState({currentUser: e.target.value})} />
      <button onClick={() => this.props.onFetchUserData(this.state.currentUser)}>Show git activity</button>
    </div>)
  }
}

UserPicker.propTypes = {
  onFetchUserData: PropTypes.func.isRequired,
  currentUser: PropTypes.string
}

export default UserPicker
