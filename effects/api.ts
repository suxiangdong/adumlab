import axios from 'axios'

const api = axios.create({
  baseURL: 'http://123.56.134.170/api',
  timeout: 8000
})

api.interceptors.response.use((response) => {
  if (response.status === 200) {
		return response.data
  }
  Promise.reject('something error !')
}, Promise.reject)

export default {
  getBannersByCategory(category: number, limit?: number) {
    return api.get('/banner', {
      params: {
        category,
        limit
      }
    })
  },
  getEvaluationsByCategory(category: number) {
    return api.get('/evaluation', {
      params: {
        category
      }
    })
  }
}
