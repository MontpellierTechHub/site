import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import {isEmpty} from 'lodash'
import {serverTimestamp} from '../helpers/firebaseHelpers'

export const userCreate = functions.auth.user()
  .onCreate(async (user) => {
    if (isEmpty(user) || isEmpty(user.email)) {
      return Promise.resolve('user not valid')
    }

    // @ts-ignore
    if (user.email.endsWith('@montpellier-techhub.org')) {
      return admin
        .firestore()
        .collection('permissions')
        .doc(user.uid)
        .set({
          isAdmin: true,
          userId: user.uid,
          userEmail: user.email,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        })
    }
    return Promise.resolve()
  })
