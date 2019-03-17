import { getMembers, addMember, updateMember, getMeetups, addMeetup, updateMeetup, getSponsors, addSponsor, updateSponsor } from '../../firebase'

const formatAsEntitiesFromObject = object => {
  return {
    [object.id]: object
  }
}
const formatAsEntitiesFromSnapshot = snapshot => {
  const data = {}
  snapshot.forEach(doc => {
    data[doc.id] = {
      id: doc.id,
      ...doc.data()
    }
  })
  return data
}

const state = {
  members: {},
  sponsors: {},
  meetups: {}
}

const getters = {
  getMembersEntities: (state, getters, rootState) => {
    return state.members
  },
  getMembersArray: (state) => {
    return Object.keys(state.members).map(key => state.members[key])
  },
  getMembersOptions: (state) => {
    const membersOptions = [{ text: 'Sélectionner un membre', value: null }]
    Object.keys(state.members).map(key => {
      membersOptions.push({text: state.members[key].name, value: state.members[key].id})
    })
    return membersOptions
  },
  getMeetupsEntities: (state, getters, rootState) => {
    return state.meetups
  },
  getMeetupsArray: (state) => {
    return Object.keys(state.meetups).map(key => state.meetups[key])
  },
  getMeetupsOptions: (state) => {
    const meetupsOptions = [{ text: 'Sélectionner un meetup', value: null }]
    Object.keys(state.meetups).map(key => {
      meetupsOptions.push({text: state.meetups[key].name, value: state.meetups[key].id})
    })
    return meetupsOptions
  },
  getSponsorsEntities: (state, getters, rootState) => {
    return state.sponsors
  },
  getSponsorsArray: (state) => {
    return Object.keys(state.sponsors).map(key => state.sponsors[key])
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
  },
  getMeetups ({ state, commit }) {
    getMeetups().then(snapshot => {
      commit('addMeetups', formatAsEntitiesFromSnapshot(snapshot))
    })
  },
  addMeetup ({state, commit}, meetup) {
    addMeetup(meetup).then(snapshot => {
      commit('addMeetups', formatAsEntitiesFromObject(meetup))
    })
  },
  updateMeetup ({ state, commit }, meetup) {
    updateMeetup(meetup).then(ref => {
      commit('addMeetups', formatAsEntitiesFromObject(meetup))
    }).catch(error => console.log(error))
  },
  getSponsors ({ state, commit }) {
    getSponsors().then(snapshot => {
      commit('addSponsors', formatAsEntitiesFromSnapshot(snapshot))
    })
  },
  addSponsor ({ state, commit }, sponsor) {
    addSponsor(sponsor).then(ref => {
      commit('addSponsors', formatAsEntitiesFromObject({id: ref.id, ...sponsor}))
    }).catch(error => console.log(error))
  },
  updateSponsor ({ state, commit }, sponsor) {
    updateSponsor(sponsor).then(ref => {
      commit('addSponsors', formatAsEntitiesFromObject(sponsor))
    }).catch(error => console.log(error))
  }
}

const mutations = {
  addMembers (state, members) {
    state.members = members
  },
  addMember (state, member) {
    state.members = {...state.members, ...member}
  },
  addMeetups (state, meetups) {
    state.meetups = {...state.meetups, ...meetups}
  },
  addSponsors (state, sponsors) {
    state.sponsors = {...state.sponsors, ...sponsors}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
