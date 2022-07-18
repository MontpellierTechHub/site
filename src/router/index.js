import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Layout from '../components/Layout.vue'

const BecomeMember  = () => import('../components/BecomeMember.vue')
const Events  = () => import('../components/Events.vue')
const Slideshow  = () => import('../components/slideshow/Slideshow.vue')
const AdminLayout  = () => import('../components/admin/Layout.vue')
const AdminSponsors  = () => import('../components/admin/Sponsors.vue')
const AdminMembers  = () => import('../components/admin/Members.vue')
const AdminMeetups  = () => import('../components/admin/Meetups.vue')
const AdminDashboard  = () => import('../components/admin/Dashboard.vue')

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
