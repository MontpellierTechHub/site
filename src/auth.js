import { firebaseAuth, provider, getPermissions } from './firebase'
import store from './store/index'
import { formatAsArrayFromSnapshot } from './store/modules/utils'

const formatUserFromFirebaseAuth = (user) => {
  return {
    id: user.uid,
    name: user.displayName,
    email: user.email,
    avatarUrl: user.photoURL
  }
}

const loadingPermissions = (user) => {
  getPermissions().then(snapshot => {
    const permission = formatAsArrayFromSnapshot(snapshot, 'userId').filter(permission => permission.userId === user.id)[0]
    if (permission) {
      store.commit('auth/addPermission', {
        isAdmin: permission.isAdmin
      })
    }
  })
}

export const googleSignIn = () => {
  firebaseAuth.signInWithPopup(provider).then((result) => {
    if (result.user) {
      const user = formatUserFromFirebaseAuth(result.user)
      store.commit('auth/addUser', user)
      loadingPermissions(user)
    }
  }).catch((error) => {
    console.error(error)
  })
}

export const initAuth = () => {
  firebaseAuth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      const user = formatUserFromFirebaseAuth(firebaseUser)
      store.commit('auth/addUser', user)
      loadingPermissions(user)
    } else {
      store.commit('auth/addUser', null)
    }
  })
}

export const firebaseSignOut = () => (
  firebaseAuth.signOut().then(() => {
    store.commit('auth/addUser', null)
  }).catch((error) => {
    console.error(error)
  })
)
