import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from '../config/firebaseConfig'

export const firebaseMain = firebase.initializeApp(firebaseConfig)
export const provider = new firebase.auth.GoogleAuthProvider()

export const firebaseAuth = firebaseMain.auth()
export const firestore = firebaseMain.firestore()

/* SPONSORS */

export const getSponsors = () => {
  return firestore.collection('sponsors').get().then(snapshot => snapshot)
}
export const addSponsor = (data) => {
  return firestore.collection('sponsors').add(data)
}
export const updateSponsor = (data) => {
  return firestore.collection('sponsors').doc(data.id).update(data)
}

/* MEETUPS */

export const getMeetups = () => {
  return firestore.collection('meetups').get().then(snapshot => snapshot)
}
export const addMeetup = (data) => {
  return firestore.collection('meetups').add(data)
}
export const updateMeetup = (data) => {
  return firestore.collection('meetups').doc(data.id).update(data)
}
/* MEMBERS */

export const getMembers = () => {
  return firestore.collection('members').get().then(snapshot => snapshot)
}
export const addMember = (data) => {
  return firestore.collection('members').add(data)
}
export const updateMember = (data) => {
  return firestore.collection('members').doc(data.id).update(data)
}

/* PERMISSIONS */

export const getPermissions = () => {
  return firestore.collection('permissions').get().then(snapshot => snapshot)
}
