import axios from 'axios'

export default class GraphQLApi {
  query (user) {
    const query = `{
          query: user(login: "${user}") {
            avatarUrl
            location
            repositories(first: 5, affiliations: OWNER) {
              edges {
                node {
                  name
                  ref(qualifiedName: "master") {
                    target {
                      ... on Commit {
                        id
                        history(first: 50) {
                          pageInfo {
                            hasNextPage
                          }
                          edges {
                            node {
                              committedDate
                              changedFiles
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }`

    let configJson = {
      url: 'https://api.github.com/graphql',
      headers: {
        'Authorization': 'bearer GIT_API_TOKEN_HERE',
        'Content-Type': 'application/json'
      },
      method: 'post',
      data: JSON.stringify({query})
    }
    return axios(configJson)
  }
}
