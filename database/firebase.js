import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDPONaKo6jrsW-3u-vgC6t7la6VjAjWDEI",
    authDomain: "mwjb-reactnativeauth.firebaseapp.com",
    databaseURL: "https://mwjb-reactnativeauth.firebaseio.com",
    projectId: "mwjb-reactnativeauth",
    storageBucket: "mwjb-reactnativeauth.appspot.com",
    messagingSenderId: "156247726480",
    appId: "1:156247726480:web:424c01a37d6650d87ffb15",
    measurementId: "G-D6C1TVN356"
};

firebase.initializeApp(firebaseConfig);

export default firebase;