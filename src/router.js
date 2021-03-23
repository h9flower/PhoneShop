import VueRouter from 'vue-router'
import Welcome from './pages/Welcome'
import Home from './pages/homePage'
import Apple from './pages/apple'
import Samsung from './pages/samsung'
import Login from './pages/login'
import Basket from './pages/bascket'
import Regist from './pages/regist'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Welcome
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: "/apple",
      component: Apple
    },
    {
      path: '/samsung',
      component: Samsung
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/basket',
      component: Basket
    },
    {
      path: '/regist',
      component: Regist
    }
  ]
})