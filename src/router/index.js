import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import BecomeMember from '@/components/BecomeMember'
import Events from '@/components/Events'
import Home from '@/components/Home'
import Meetups from '@/components/Meetups'
import config from '../../config'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: config.build.assetsPublicPath,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/become-member',
      name: 'BecomeMember',
      component: BecomeMember
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
