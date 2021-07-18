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
  getHomeTopics(limit = 9) {
    return api.get('/product/index', { params: { type: 2, limit } })
  },
  getHotProducts(limit = 4) {
    return api.get('/product/index', { params: { type: 1, limit } })
  },
  getNews() {
    return api.get('/article', { params: { type: 1 } })
  },
  getNewsDetailById(id: number | string) {
    return api.get(`/article/${id}`)
  },
  getNotifications() {
    return api.get('/article', { params: { type: 2 } })
  },
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
