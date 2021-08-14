import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDhXTV5TE0DoDRE25Js8PP5CoPhWXi_hKA",
    authDomain: "ecommerce-13ebf.firebaseapp.com",
    projectId: "ecommerce-13ebf",
    storageBucket: "ecommerce-13ebf.appspot.com",
    messagingSenderId: "388110989028",
    appId: "1:388110989028:web:fb4a619e31e078e9c25ef1",
    measurementId: "G-HXNVY3X1FY"
})

export const auth=app.auth();
export default app;