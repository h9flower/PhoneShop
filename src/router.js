import VueRouter from 'vue-router'
import Home from './pages/homePage'
import Shop from './pages/shop'
import Authorization from './pages/authorization'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/authorization',
      component: Authorization
    }
  ]
})