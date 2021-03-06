import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import BecomeMember from '@/components/BecomeMember'
import Events from '@/components/Events'
import Layout from '@/components/Layout'
import Home from '@/components/Home'
import Meetups from '@/components/Meetups'
import Slideshow from '@/components/slideshow/Slideshow'
import AdminLayout from '@/components/admin/Layout'
import AdminSponsors from '@/components/admin/Sponsors'
import AdminMembers from '@/components/admin/Members'
import AdminMeetups from '@/components/admin/Meetups'
import AdminDashboard from '@/components/admin/Dashboard'
import config from '../../config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: config.build.assetsPublicPath,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'about',
          name: 'About',
          component: About
        },
        {
          path: 'meetups',
          name: 'Meetups',
          component: Meetups
        },
        {
          path: 'become-member',
          name: 'BecomeMember',
          component: BecomeMember
        },
        {
          path: 'events',
          name: 'Events',
          component: Events
        }
      ]
    },
    {
      path: '/slideshow',
      name: 'Slideshow',
      component: Slideshow
    },
    {
      path: '/slides',
      name: 'Slideshow',
      component: Slideshow
    },
    {
      path: '/slide',
      name: 'Slideshow',
      component: Slideshow
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: '/',
          name: 'AdminDashboard',
          component: AdminDashboard
        },
        {
          path: 'sponsors',
          name: 'AdminSponsors',
          component: AdminSponsors
        },
        {
          path: 'members',
          name: 'AdminMembers',
          component: AdminMembers
        },
        {
          path: 'meetups',
          name: 'AdminMeetups',
          component: AdminMeetups
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'Home' }
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
