import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDwy7KpFeEHe2NfUpMlhelA56D2N6v1GbY",
    authDomain: "lucia-chain.firebaseapp.com",
    projectId: "lucia-chain",
    storageBucket: "lucia-chain.appspot.com",
    messagingSenderId: "343290929380",
    appId: "1:343290929380:web:a38b08ab4e193ca298ccf1",
    measurementId: "G-W523PJBM60"
};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)

}else{
    firebase.app()
}

const auth = firebase.auth()


export default auth