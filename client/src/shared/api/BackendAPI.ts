import Axios from 'axios'

const BackendAPI = Axios.create({
  baseURL: 'http://localhost:3001'
})

export default BackendAPI