import axios from 'axios'

const demo = axios.create({
  baseURL: 'http://www.demo.com/api/v1/users/common'
})

export default demo