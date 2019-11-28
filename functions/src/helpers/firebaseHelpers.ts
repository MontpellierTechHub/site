import * as admin from 'firebase-admin'
export const init = () => {
  admin.initializeApp()
}
export const serverTimestamp = admin.firestore.FieldValue.serverTimestamp
