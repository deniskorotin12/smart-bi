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


routes.beforeEach((to, from, next) =>{
  if(to.meta.requiredAuth){
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(authUser && authUser.access_token){
      next()
    }else{
      routes.push({path: '/login'});
    }
  }

  next()
})


new Vue({
  el: '#app',
  router: routes,
  data: {
    show: false
  },
  render: h => h(App)
})
