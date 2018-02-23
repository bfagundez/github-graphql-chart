import {combineReducers} from 'redux'
import app from './appReducer'
import gitData from './gitDataReducer'
export default combineReducers({
  app, gitData
})
