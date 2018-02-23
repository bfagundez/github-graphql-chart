import { FETCH_REPO_DATA_PENDING,
          FETCH_REPO_DATA_REJECTED,
          FETCH_REPO_DATA_FULFILLED
        } from 'constants/actionTypes'

import _ from 'lodash'

const initialState = {}

function reshapeGitData (rawGraphQLData) {
  let githubData = rawGraphQLData
  let repos = _.get(githubData, 'data.query.repositories.edges', [])
  let chartData = {label: 'Activity', values: []}

  for (var i = 0; i < repos.length; i++) {
    let tempRepoData = _.get(repos[i], 'node.ref.target.history.edges', [])
    for (var c = 0; c < tempRepoData.length; c++) {
      chartData.values.push({
        y: _.get(tempRepoData[c], 'node.changedFiles', 0),
        x: new Date(_.get(tempRepoData[c], 'node.committedDate', null))
      })
    }
  }
  return chartData
}

export default function gitData (state = initialState, action) {
  switch (action.type) {
    case FETCH_REPO_DATA_PENDING: {
      return {...state, fetching: true}
    }
    case FETCH_REPO_DATA_REJECTED: {
      return { ...state, fetching: false, error: action.payload }
    }
    case FETCH_REPO_DATA_FULFILLED: {
      return { ...state, fetching: false, activity: reshapeGitData(action.payload.data) }
    }
    default:
      return state
  }
}
