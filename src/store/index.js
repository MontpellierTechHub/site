import Vue from 'vue'
import Vuex from 'vuex'
import sponsors from './modules/sponsors'
import meetups from './modules/meetups'
import members from './modules/members'
import auth from './modules/auth'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    sponsors,
    meetups,
    members,
    auth
  },
  strict: process.env.NODE_ENV !== 'production'
//   plugins: debug ? [createLogger()] : []
})
