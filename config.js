import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDm6PHlS8OSlEBUfDXKoX3TqzVtkWyC_7A",
    authDomain: "ayaanc86-ee571.firebaseapp.com",
    databaseURL: "https://ayaanc86-ee571-default-rtdb.firebaseio.com",
    projectId: "ayaanc86-ee571",
    storageBucket: "ayaanc86-ee571.appspot.com",
    messagingSenderId: "337865245155",
    appId: "1:337865245155:web:221bb066b7b77a431220d6"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.database();