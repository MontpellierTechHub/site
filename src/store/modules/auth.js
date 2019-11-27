import { getPermissions } from '../../firebase'
import { formatAsArrayFromSnapshot } from './utils'

const state = {
  user: null
}

const getters = {
  getConnectedUser: (state, getters, rootState) => {
    return state.user
  }
}

const actions = {
  setUser ({ state, commit }, user) {
    commit('addUser', user)
  },
  getUserPermissions ({state, commit}, user) {
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
