import _ from 'lodash'

const initialState = {}

export default function gitData (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_REPO_DATA_PENDING': {
      return {...state, fetching: true}
    }
    case 'FETCH_REPO_DATA_REJECTED': {
      return { ...state, fetching: false, error: action.payload }
    }
    case 'FETCH_REPO_DATA_FULFILLED': {
      return { ...state, fetching: false, activity: action.payload.data }
    }
    default:
      return state
  }
}
