import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  router,
  store,
  Vuelidate
}).$mount('#app')
