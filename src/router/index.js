import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/view/index')
    },
    {
      path: '/login',
      component: require('@/view/login')
    },
    {
      path: '/personal_home/:uid',
      component: require('@/view/personal_home')
    }
  ]
})
