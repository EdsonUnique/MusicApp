const SEVER_URL = 'http://192.168.3.21:10008'
// const SEVER_URL = 'http://192.168.50.17:9090'
// const STATIC_SEVER_URL = 'http://192.168.50.17:8081'

// const SEVER_URL = 'http://192.168.11.44:9090'
// const STATIC_SEVER_URL = 'http://192.168.11.44:8081/'

// const SEVER_URL = 'http://39.104.115.6:10005'
const STATIC_SEVER_URL = 'http://123.56.124.121:80/audio'


const API_PRE = `${SEVER_URL}/`

const makeApiUrl = endpoint => {
  return `${API_PRE}${endpoint}`
}


export {
  makeApiUrl,
  SEVER_URL,
  STATIC_SEVER_URL,

}
