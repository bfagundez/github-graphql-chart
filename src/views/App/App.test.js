import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {

  it('renders the app correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(App)).to.exist
  })

  it('renders the app title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<p> Volume of Files Changed by Date </p>)).to.equal(true)
  })
})
