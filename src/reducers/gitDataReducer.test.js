import reducer from 'reducers/gitDataReducer'
import * as types from 'constants/ActionTypes'

describe('git Data reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle FETCH_REPO_DATA_PENDING', () => {
    expect(
      reducer({}, {
        type: types.FETCH_REPO_DATA_PENDING
      })
    ).toEqual({
      fetching: true
    })
  })

  it('should handle FETCH_REPO_DATA_REJECTED', () => {
    expect(
      reducer({}, {
        type: types.FETCH_REPO_DATA_REJECTED,
        payload: 'Error found',
        fetching: false
      })
    ).toEqual({
      error: 'Error found',
      fetching: false
    })
  })

  it('should handle FETCH_REPO_DATA_FULFILLED', () => {
    expect(
      reducer({}, {
        type: types.FETCH_REPO_DATA_FULFILLED,
        payload: { 'data': {
          'data': {
            'query': {
              'avatarUrl': 'https://avatars3.githubusercontent.com/u/559456?v=4',
              'location': null,
              'repositories': {
                'edges': [
                  {
                    'node': {
                      'name': 'repo-a',
                      'ref': {
                        'target': {
                          'id': 'MDY6Q29tbWl0NjA1NTc2Nzo0NDU5ZjM0ZjljZGI3N2U3OTQ2MWM4ZjM3ODJiMmQ2Yzg2YWZiYmU0',
                          'history': {
                            'pageInfo': {
                              'hasNextPage': false
                            },
                            'edges': [
                              {
                                'node': {
                                  'committedDate': '2012-10-06T02:44:35Z',
                                  'changedFiles': 9
                                }
                              },
                              {
                                'node': {
                                  'committedDate': '2012-10-05T04:19:53Z',
                                  'changedFiles': 1
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    'node': {
                      'name': 'repo-b',
                      'ref': {
                        'target': {
                          'id': 'MDY6Q29tbWl0NjA1NTc2Nzo0NDU5ZjM0ZjljZGI3N2U3OTQ2MWM4ZjM3ODJiMmQ2Yzg2YWZiYmU0',
                          'history': {
                            'pageInfo': {
                              'hasNextPage': false
                            },
                            'edges': [
                              {
                                'node': {
                                  'committedDate': '2012-10-06T02:44:35Z',
                                  'changedFiles': 9
                                }
                              },
                              {
                                'node': {
                                  'committedDate': '2012-10-05T04:19:53Z',
                                  'changedFiles': 1
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  }

                ]
              }
            }
          }
        } },
        fetching: false
      })
    ).toEqual({
      fetching: false,
      activity: { label: 'Activity',
        values:
                     [ { y: 9, x: new Date('2012-10-06T02:44:35.000Z') },
                       { y: 1, x: new Date('2012-10-05T04:19:53.000Z') },
                       { y: 9, x: new Date('2012-10-06T02:44:35.000Z') },
                       { y: 1, x: new Date('2012-10-05T04:19:53.000Z') } ] }
    })
  })
})
