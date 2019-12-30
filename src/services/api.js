import Axios from 'axios'

export default Axios.create({
  baseURL: __DEV__
    ? 'http://192.168.25.7:3333/api'
    : 'http://192.168.25.5:3333/api',
})
