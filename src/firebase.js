import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA6QC9dYVaJ4VIOI9SNQvDL4CzwwCwAeuE",
    authDomain: "crud-ee934.firebaseapp.com",
    projectId: "crud-ee934",
    storageBucket: "crud-ee934.appspot.com",
    messagingSenderId: "310376017452",
    appId: "1:310376017452:web:0c8904671060cb0a14eb89"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)