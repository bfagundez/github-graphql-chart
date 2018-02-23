//import 'jsdom-global/register'
import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import ChartContainer from 'components/ChartContainer'
import UserPicker from 'components/UserPicker'
import { App } from './App'
import { createMockStore } from 'redux-test-utils'
import {Provider} from 'react-redux';

describe('<App />', () => {
  it('renders the app correctly', () => {
    const store = createMockStore({ gitData: {} })
    const props = {}

    const wrapper = shallow(
      <Provider store={store}>
        <App props={props}/>
      </Provider>, {disableLifecycleMethods: true})
    expect(wrapper.find(App)).to.exist
  })

  it('renders the Chart container and the user picker', () => {
    const store = createMockStore({ gitData: {} })
    const props = {}
    const wrapper = shallow(<Provider store={store}>
      <App props={props}/>
    </Provider>)
    expect(wrapper.find(ChartContainer)).to.exist
    expect(wrapper.find(UserPicker)).to.exist
  })
})
