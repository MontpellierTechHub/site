import Vue from 'vue'
import Vuex from 'vuex'
import entities from './modules/entities'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    entities
  },
  strict: process.env.NODE_ENV !== 'production'
//   plugins: debug ? [createLogger()] : []
})
