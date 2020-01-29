import {
  getSponsors as getSponsorsFromDB,
  getPrivateSponsorsData as getPrivateSponsorsDataFromDB,
  addSponsor as addSponsorToDB,
  updateSponsor as updateSponsorToDB
} from '../../firebase'
import { formatAsEntitiesFromObject, formatAsEntitiesFromSnapshot } from './utils'
import shuffle from 'lodash.shuffle'

const state = {
  sponsors: {}
}

const getters = {
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
  getSponsors ({ commit }) {
    getSponsorsFromDB()
      .then(snapshot => {
        commit('addSponsors', formatAsEntitiesFromSnapshot(snapshot))
      })
  },
  getPrivateDataForSponsors ({ commit }) {
    getPrivateSponsorsDataFromDB()
      .then(snapshot => {
        commit('addSponsors', snapshot)
      })
  },
  addSponsor ({ commit }, sponsor) {
    addSponsorToDB(sponsor)
      .then(sponsorId => {
        commit('addSponsors', formatAsEntitiesFromObject({ id: sponsorId, ...sponsor }))
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
  },
  updateSponsor ({ commit }, sponsor) {
    updateSponsorToDB(sponsor)
      .then(() => {
        commit('addSponsors', formatAsEntitiesFromObject(sponsor))
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
  }
}

const mutations = {
  addSponsors (state, sponsors) {
    state.sponsors = { ...state.sponsors, ...sponsors }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
