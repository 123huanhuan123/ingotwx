import Vue from 'vue'
import Router from 'vue-router'
import reg from '@/components/reg'
import login from '@/components/login'
import choice from '@/components/choice'
import forgetpwd from '@/components/forgetpwd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
     {
      path: '/choice',
      name: 'choice',
      component: choice
    },
     {
      path: '/reg',
      name: 'reg',
      component: reg
    },
     {
      path: '/forgetpwd',
      name: 'forgetpwd',
      component: forgetpwd
    }
  ]
})
