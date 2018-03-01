import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import VueNotifications from 'vue-notifications'
import options from './services/options'
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)
Vue.use(VueNotifications, options)
Vue.use(VueRouter)


new Vue({
  el: '#app',
  router: routes,
  data: {
    show: false
  },
  render: h => h(App)
})
