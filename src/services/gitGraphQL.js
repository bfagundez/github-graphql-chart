import axios from 'axios'

export default class GraphQLApi {
  query (user) {
    const query = `{
          query: user(login: "${user}") {
            avatarUrl
            location
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
