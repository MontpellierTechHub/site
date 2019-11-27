import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from '../config/firebaseConfig'
import {formatAsEntitiesFromSnapshot} from './store/modules/utils'

export const firebaseMain = firebase.initializeApp(firebaseConfig)
export const provider = new firebase.auth.GoogleAuthProvider()

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export const firebaseAuth = firebaseMain.auth()
export const firestore = firebaseMain.firestore()

/* SPONSORS */
export const getSponsors = () => {
  return firestore
    .collection('sponsors')
    .get()
    .then(snapshot => {
      return snapshot
    })
}
export const getPrivateSponsorsData = () => {
  return Promise
    .all([firestore
      .collection('sponsors')
      .get(), firestore
      .collection('sponsorsPrivateData')
      .get()])
    .then((snapshots) => {
      const sponsors = formatAsEntitiesFromSnapshot(snapshots[0])
      const sponsorsPrivateData = formatAsEntitiesFromSnapshot(snapshots[1])
      const mergedSponsors = {}
      Object.keys(sponsors).forEach(sponsorId => {
        mergedSponsors[sponsorId] = {
          ...sponsors[sponsorId],
          ...sponsorsPrivateData[sponsorId]
        }
      })
      return mergedSponsors
    })
}
export const addSponsor = (data) => {
  const {publicData, privateData} = splitSponsorData(data)

  privateData.createdAt = privateData.updatedAt = serverTimestamp()

  const publicDataPromise = firestore
    .collection('sponsors')
    .add(publicData)

  const privateDataPromise = publicDataPromise
    .then(docRef => docRef.id)
    .then(sponsorId => {
      return firestore
        .collection('sponsorsPrivateData')
        .doc(sponsorId)
        .set(privateData)
    })
  return Promise.all([publicDataPromise, privateDataPromise])
    .then(([resultPublicDataRef]) => {
      return resultPublicDataRef.id
    })
}
export const updateSponsor = (data) => {
  const {publicData, privateData} = splitSponsorData(data)
  privateData.updatedAt = serverTimestamp()

  return Promise.all([
    firestore
      .collection('sponsors')
      .doc(data.id).update(publicData),
    firestore
      .collection('sponsorsPrivateData')
      .doc(data.id).update(privateData)
  ])
}

/* MEETUPS */

export const getMeetups = () => {
  return firestore
    .collection('meetups')
    .get()
    .then(snapshot => snapshot)
}
export const addMeetup = (data) => {
  return firestore
    .collection('meetups')
    .add(data)
}
export const updateMeetup = (data) => {
  return firestore
    .collection('meetups')
    .doc(data.id).update(data)
}
/* MEMBERS */

export const getMembers = () => {
  return firestore
    .collection('members')
    .get()
    .then(snapshot => snapshot)
}
export const addMember = (data) => {
  return firestore
    .collection('members')
    .add(data)
}
export const updateMember = (data) => {
  return firestore
    .collection('members')
    .doc(data.id).update(data)
}

/* PERMISSIONS */

export const getPermissions = () => {
  return firestore
    .collection('permissions')
    .get()
    .then(snapshot => snapshot)
}

/* UTILS */

// Give a whole sponsor object, return two object with the public & private data splitted.
const splitSponsorData = (sponsorData) => {
  const publicData = {
    logo: sponsorData.logo,
    name: sponsorData.name,
    status: sponsorData.status,
    url_website: sponsorData.url_website
  }

  const privateData = {...sponsorData}
  delete privateData.logo
  delete privateData.name
  delete privateData.status
  delete privateData.url_website
  if (sponsorData.id) {
    publicData.id = sponsorData.id
    privateData.sponsorId = sponsorData.id
  }
  return {publicData, privateData}
}
