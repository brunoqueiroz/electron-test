import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landing',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/',
      name: 'room',
      component: require('@/components/Room').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
