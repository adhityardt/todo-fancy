import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDqdG6QLaRrZIpgDF7IDXSvyQMi_Sow8us',
  authDomain: 'todofancy-50283.firebaseapp.com',
  databaseURL: 'https://todofancy-50283.firebaseio.com',
  projectId: 'todofancy-50283',
  storageBucket: 'todofancy-50283.appspot.com',
  messagingSenderId: '636043498108'
})

export const db = firebaseApp.database()
export const ref = db.ref('tasks')
