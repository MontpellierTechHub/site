import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Meetups from '@/components/Meetups'
import Sponsors from '@/components/Sponsors'
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
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})
