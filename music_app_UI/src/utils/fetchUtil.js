const SEVER_URL = 'http://localhost:10008'
const STATIC_SEVER_URL = 'https://edsonunique.github.io/Source/audio'


const API_PRE = `${SEVER_URL}/`

const makeApiUrl = endpoint => {
  return `${API_PRE}${endpoint}`
}


export {
  makeApiUrl,
  SEVER_URL,
  STATIC_SEVER_URL,

}
