// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsXGyDDM4nveaKZZ3-pQVkcyo0xHi1fQU",
    authDomain: "netflix-clone-d1567.firebaseapp.com",
    projectId: "netflix-clone-d1567",
    storageBucket: "netflix-clone-d1567.appspot.com",
    messagingSenderId: "588817805149",
    appId: "1:588817805149:web:b85b8acbc0fba894e982b4"
  }

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }