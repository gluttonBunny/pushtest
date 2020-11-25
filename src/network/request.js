import axios from 'axios'

export const request = (config) => {
  const instance = axios.create({
    baseURL: 'http://123.102.23.23:8000/',
    timeout: 5000
  })

  instance.interceptors.request.use(config => config,error => err)
  instance.interceptors.response.use(res => res.data, err => err)

  return instance(config)
}
