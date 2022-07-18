import { createStore } from 'vuex'
import sponsors from './modules/sponsors'
import meetups from './modules/meetups'
import members from './modules/members'
import auth from './modules/auth'

export const store = createStore({
  modules: {
    sponsors,
    meetups,
    members,
    auth
  },
  strict: process.env.NODE_ENV !== 'production'
})
