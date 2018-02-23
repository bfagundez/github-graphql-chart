import 'jsdom-global/register'
import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import UserPicker from './UserPicker'
import sinon from 'sinon'

describe('<UserPicker />', () => {
  it('renders the field and the button', () => {
    const onFetchUserData = fn => fn
    const wrapper = mount(<UserPicker onFetchUserData={onFetchUserData} />)
    expect(wrapper.find(UserPicker)).to.exist
    expect(wrapper.find(<input type='text' />)).to.exist
    expect(wrapper.find(<button />)).to.exist
  })

  it('it calls the right event when the button is clicked', () => {
    const onFetchUserData = sinon.spy()
    const currentUser = 'bfagundez'
    const wrapper = mount(<UserPicker onFetchUserData={onFetchUserData} currentUser={currentUser} />)
    wrapper.find('button').simulate('click')
    expect(onFetchUserData).to.have.property('callCount', 1)
  })

  it('it sends the state content when called', () => {
    const onFetchUserData = sinon.spy()
    const currentUser = 'bfagundez'
    const wrapper = mount(<UserPicker onFetchUserData={onFetchUserData} currentUser={currentUser} />)
    wrapper.setState({currentUser: 'anotheruser'})
    wrapper.find('button').simulate('click')
    expect(onFetchUserData.calledWith('anotheruser')).to.be.true
  })
})
