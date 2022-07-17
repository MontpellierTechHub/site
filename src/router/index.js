import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import BecomeMember from '../components/BecomeMember.vue'
import Events from '../components/Events.vue'
import Layout from '../components/Layout.vue'
import Home from '../components/Home.vue'
import Meetups from '../components/Meetups.vue'
import Slideshow from '../components/slideshow/Slideshow.vue'
import AdminLayout from '../components/admin/Layout.vue'
import AdminSponsors from '../components/admin/Sponsors.vue'
import AdminMembers from '../components/admin/Members.vue'
import AdminMeetups from '../components/admin/Meetups.vue'
import AdminDashboard from '../components/admin/Dashboard.vue'

export const router = createRouter({
  history: createWebHistory(),
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
          path: '/admin/',
          name: 'AdminDashboard',
          sensitive: true,
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
      path: '/:pathMatch(.*)',
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
