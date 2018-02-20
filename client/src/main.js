import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router: routes,
  data: {
    show: false
  },
  render: h => h(App)
})
