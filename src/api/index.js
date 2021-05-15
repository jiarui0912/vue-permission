import axios from '../utils/request'


const base = {
  baseUrl: 'http://localhost:3300',
  loginUrl: '/api/login',
  permission: '/api/permission'
}



const api = {
  login (params) {
    return axios.post(base.baseUrl + base.loginUrl, params)
  },
  permission (params) {
    return axios.get(base.baseUrl + base.permission, {
      params
    })
  }
}

export default api;