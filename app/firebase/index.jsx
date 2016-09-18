import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyABUDQ37aRaBMceh8iyxNDA3xjtKfKrEOI",
        authDomain: "todos-redux-bfe03.firebaseapp.com",
        databaseURL: "https://todos-redux-bfe03.firebaseio.com",
        storageBucket: "todos-redux-bfe03.appspot.com",
        messagingSenderId: "1061946244582"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;