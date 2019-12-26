import Axios from 'axios'

export default Axios.create({
  baseURL: 'http://192.168.25.5:3333/api',
})
