import { getMeetups, addMeetup, updateMeetup } from '../../firebase'
import { formatAsEntitiesFromObject, formatAsEntitiesFromSnapshot } from './utils'

const state = {
  meetups: {},
  sortBy: 'name'
}

const getters = {
  getMeetupsEntities: (state, getters, rootState) => {
    return state.meetups
  },
  getMeetupsArray: (state) => {
    return Object.keys(state.meetups).map(key => state.meetups[key]).filter(meetup => !meetup.deleted_at)
  },
  getMeetupsArraySortable: (state) => {
    return Object.keys(state.meetups).map(key => state.meetups[key]).filter(meetup => !meetup.deleted_at).sort((a, b) => {
      return a[state.sortBy].localeCompare(b[state.sortBy])
    })
  },
  getMeetupsForHomePage: (state) => {
    return getters.getMeetupsArray(state).filter(meetup => meetup.status === 'active')
  },
  getMeetupsOptions: (state) => {
    const meetupsOptions = [{ text: 'Sélectionner un meetup', value: null }]
    getters.getMeetupsArray(state).sort((a, b) => {
      return a.name.localeCompare(b.name)
    }).map(meetup => {
      meetupsOptions.push({text: meetup.name, value: meetup.id})
    })
    return meetupsOptions
  },
  getMeetupsIdFromMeetupCom: (state) => {
    return getters.getMeetupsArray(state).filter(meetup => meetup.meetup_dot_id !== '').map(meetup => meetup.meetup_dot_id)
  }
}

const actions = {
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
  setSortBy ({state, commit}, sortBy) {
    commit('updateSortBy', sortBy)
  }
}

const mutations = {
  addMeetups (state, meetups) {
    state.meetups = {...state.meetups, ...meetups}
  },
  updateSortBy (state, sortBy) {
    state.sortBy = sortBy
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
