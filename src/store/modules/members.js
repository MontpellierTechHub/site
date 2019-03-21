import { getMembers, addMember, updateMember } from '../../firebase'
import { formatAsEntitiesFromObject, formatAsEntitiesFromSnapshot } from './utils'

const state = {
  members: {}
}

const getters = {
  getMembersEntities: (state, getters, rootState) => {
    return state.members
  },
  getMembersArray: (state) => {
    return Object.keys(state.members).map(key => state.members[key]).filter(member => !member.deleted_at)
  },
  getMembersOptions: (state) => {
    const membersOptions = [{ text: 'Sélectionner un membre', value: null }]
    getters.getMembersArray(state).map(member => {
      membersOptions.push({text: member.name, value: member.id})
    })
    return membersOptions
  }
}

const actions = {
  getMembers ({ state, commit }) {
    getMembers().then(snapshot => {
      commit('addMembers', formatAsEntitiesFromSnapshot(snapshot))
    })
  },
  addMember ({ state, commit }, member) {
    addMember(member).then(ref => {
      commit('addMember', formatAsEntitiesFromObject({id: ref.id, ...member}))
    }).catch(error => console.log(error))
  },
  updateMember ({ state, commit }, member) {
    updateMember(member).then(ref => {
      commit('addMember', formatAsEntitiesFromObject(member))
    }).catch(error => console.log(error))
  }
}

const mutations = {
  addMembers (state, members) {
    state.members = members
  },
  addMember (state, member) {
    state.members = {...state.members, ...member}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
