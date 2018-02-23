import React from 'react'
import PropTypes from 'prop-types'
import { ScatterPlot } from 'react-d3-components'

const ChartContainer = props => {
  return (
    <div>
      <ScatterPlot
        data={props.data}
        width={900}
        height={300}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}
        xAxis={{label: 'Year'}}
        yAxis={{label: 'Number of files changed'}} />
    </div>
  )
}

ChartContainer.propTypes = {
  data: PropTypes.object.isRequired
}

export default ChartContainer
