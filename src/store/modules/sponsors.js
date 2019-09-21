import { getSponsors, addSponsor, updateSponsor } from '../../firebase'
import { formatAsEntitiesFromObject, formatAsEntitiesFromSnapshot } from './utils'
import shuffle from 'lodash.shuffle'

const state = {
  sponsors: {}
}

const getters = {
  getSponsorsEntities: (state, getters, rootState) => {
    return state.sponsors
  },
  getSponsorsArray: (state) => {
    return Object.keys(state.sponsors).map(key => state.sponsors[key]).filter(sponsor => !sponsor.deleted_at).sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  },
  getSponsorsForHomePage: (state) => {
    return shuffle(getters.getSponsorsArray(state).filter(sponsor => sponsor.status === 'active'))
  }
}

const actions = {
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
