import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyByPRCupCsYgiQkK7tVI382Nz79VoxcQbY",
    authDomain: "eclone-81a08.firebaseapp.com",
    projectId: "eclone-81a08",
    storageBucket: "eclone-81a08.appspot.com",
    messagingSenderId: "912238231320",
    appId: "1:912238231320:web:03598a6a0da1a26796286d",
    measurementId: "G-PCVYQNK9FW"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }