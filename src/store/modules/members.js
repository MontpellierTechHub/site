import { getMembers, addMember, updateMember } from '../../firebase'
import { formatAsEntitiesFromObject, formatAsEntitiesFromSnapshot } from './utils'

const state = {
  members: {}
}

const getters = {
  getMembersEntities: (state) => {
    return state.members
  },
  getMembersArray: (state) => {
    return Object.keys(state.members).map(key => state.members[key]).filter(member => !member.deleted_at).sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  },
  getMembersOptions: (state) => {
    const membersOptions = [{ text: 'Sélectionner un membre', value: null }]
    getters.getMembersArray(state).sort((a, b) => {
      return a.name.localeCompare(b.name)
    }).map(member => {
      membersOptions.push({ text: member.name, value: member.id })
    })
    return membersOptions
  }
}

const actions = {
  getMembers ({ commit }) {
    getMembers().then(snapshot => {
      commit('addMembers', formatAsEntitiesFromSnapshot(snapshot))
    })
  },
  addMember ({ commit }, member) {
    addMember(member).then(ref => {
      commit('addMember', formatAsEntitiesFromObject({ id: ref.id, ...member }))
      // eslint-disable-next-line no-console
    }).catch(error => console.log(error))
  },
  updateMember ({ commit }, member) {
    updateMember(member).then(() => {
      commit('addMember', formatAsEntitiesFromObject(member))
      // eslint-disable-next-line no-console
    }).catch(error => console.log(error))
  }
}

const mutations = {
  addMembers (state, members) {
    state.members = members
  },
  addMember (state, member) {
    state.members = { ...state.members, ...member }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
