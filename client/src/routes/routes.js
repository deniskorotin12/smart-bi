import Vue from 'vue'
import Registration from '../views/Registration.vue'
import Main from '../views/Main.vue'
import Udid from '../views/Udid.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import Thanks from '../views/Thanks.vue'

import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/main'
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/udid',
      component: Udid
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/users',
      component: Users,
      meta: { requiredAuth: true }
    },
    {
      path: '/thanks',
      component: Thanks
    }
  ]
})
