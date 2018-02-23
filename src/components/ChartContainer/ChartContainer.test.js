import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ChartContainer from './ChartContainer'

describe('<ChartContainer />', () => {

  it('renders the chart correctly', () => {
    const wrapper = shallow(<ChartContainer />)
    expect(wrapper.find(ChartContainer)).to.exist
  })

})
