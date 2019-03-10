import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '../config/firebaseConfig'

export const firebaseMain = firebase.initializeApp(firebaseConfig)

// export const authProvider = firebaseMain.auth()
export const firestore = firebaseMain.firestore()

const formatAsArrayFromSnapshot = snapshot => {
  const data = []
  snapshot.forEach(doc => {
    data.push({...doc.data(), id: doc.id})
  })
  return data
}
const formatAsEntitiesFromSnapshot = snapshot => {
  const data = {}
  snapshot.forEach(doc => {
    data[doc.id] = {...doc.data(), id: doc.id}
  })
  return data
}

/* SPONSORS */

export const getSponsors = () => {
  return firestore.collection('sponsors').get().then(snapshot => formatAsArrayFromSnapshot(snapshot))
}

export const addSponsor = (data) => {
  return firestore.collection('sponsors').add(data)
}

/* SPONSORS COTISATIONS */

export const getCotisationsSponsorsAsEntities = () => {
  return firestore.collection('cotisations_sponsors').get().then(snapshot => formatAsEntitiesFromSnapshot(snapshot))
}

export const addSponsorCotisation = (data) => {
  return firestore.collection('cotisations_sponsors').add(data)
}

/* MEETUPS */

export const getMeetups = () => {
  return firestore.collection('meetups').get().then(snapshot => formatAsArrayFromSnapshot(snapshot))
}
export const getMeetupsAsEntities = () => {
  return firestore.collection('meetups').get().then(snapshot => formatAsEntitiesFromSnapshot(snapshot))
}

export const addMeetup = (data) => {
  return firestore.collection('meetups').add(data)
}

/* MEMBERS */

export const getMembers = () => {
  return firestore.collection('members').get().then(snapshot => formatAsArrayFromSnapshot(snapshot))
}
export const getMembersAsEntities = () => {
  return firestore.collection('members').get().then(snapshot => formatAsEntitiesFromSnapshot(snapshot))
}

export const addMember = (data) => {
  return firestore.collection('members').add(data)
}

/* MEMBERS COTISATIONS */

export const getCotisationsMembersAsEntities = () => {
  return firestore.collection('cotisations_members').get().then(snapshot => formatAsEntitiesFromSnapshot(snapshot))
}

export const addMemberCotisation = (data) => {
  return firestore.collection('cotisations_members').add(data)
}
