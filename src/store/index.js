import Vue from 'vue'
import Vuex from 'vuex'
import sponsors from './modules/sponsors'
import meetups from './modules/meetups'
import members from './modules/members'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sponsors,
    meetups,
    members,
    auth
  },
  strict: process.env.NODE_ENV !== 'production'
})
