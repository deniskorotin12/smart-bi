import Vue from 'vue'
import Registration from '../views/Registration.vue'
import Main from '../views/Main.vue'
import Downloading from '../views/Downloading.vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/main'
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/downloading',
      component: Downloading
    },
    {
      path: '/main',
      component: Main
    }
  ]
})
