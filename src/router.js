import VueRouter from 'vue-router'
import Home from './pages/homePage'
import Apple from './pages/apple'
import Samsung from './pages/samsung'
import Authorization from './pages/authorization'
import Basket from './pages/bascket'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/apple',
      component: Apple
    },
    {
      path: '/samsung',
      component: Samsung
    },
    {
      path: '/authorization',
      component: Authorization
    },
    {
      path: '/basket',
      component: Basket
    }
  ]
})