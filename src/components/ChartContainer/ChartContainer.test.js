import 'jsdom-global/register'
import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ChartContainer from './ChartContainer'
import { ScatterPlot } from 'react-d3-components'

describe('<ChartContainer />', () => {
  const dummyData = {
    label: 'Number of commits and dates ',
    values: [
      {x: new Date(2015, 2, 5), y: 1},
      {x: new Date(2015, 2, 6), y: 2},
      {x: new Date(2015, 2, 7), y: 0}
    ]}

  it('renders the chart container and the scatterplot', () => {
    const wrapper = mount(<ChartContainer data={dummyData} />)
    expect(wrapper.find(ChartContainer)).to.exist
    expect(wrapper.find(ScatterPlot)).to.have.length(1)
  })

  it('renders the chart component even with empty data', () => {
    const dummyData = {}
    const wrapper = shallow(<ChartContainer data={dummyData} />)
    expect(wrapper.find(ChartContainer)).to.exist
    expect(wrapper.find(ScatterPlot)).to.have.length(1)
  })
})
