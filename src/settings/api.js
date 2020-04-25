import md5 from 'md5'

const dateCurrent = new Date()

const API = {
  apiEndpoint: 'https://gateway.marvel.com:443/v1/public',
  apikeyPublic: process.env.VUE_APP_API_PUBLIC_KEY,
  apikeyPrivate: process.env.VUE_APP_API_PRIVATE_KEY
}

const PARAMS = {
  ts: dateCurrent.toISOString(),
  apikey: API.apikeyPublic,
  hash: md5(
    `${dateCurrent.toISOString()}${API.apikeyPrivate}${API.apikeyPublic}`
  )
}

export { API, PARAMS }
