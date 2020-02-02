import { getPermissions } from '../../firebase'
import { formatAsArrayFromSnapshot } from './utils'

const state = {
  user: null
}

const getters = {
  getConnectedUser: (state) => {
    return state.user
  }
}

const actions = {
  setUser ({ commit }, user) {
    commit('addUser', user)
  },
  getUserPermissions ({ commit }, user) {
    getPermissions().then(snapshot => {
      commit('addPermission', formatAsArrayFromSnapshot(snapshot)[user.id])
    })
  }
}

const mutations = {
  addUser (state, user) {
    state.user = user
  },
  addPermission (state, permission) {
    state.user = {
      ...state.user,
      ...permission
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
