import firebase from 'firebase';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAUt5HEqEIjPrvXJRI0nPCkUnT7_qHtWD4",
    authDomain: "news-letter-7649f.firebaseapp.com",
    databaseURL: "https://news-letter-7649f-default-rtdb.firebaseio.com",
    projectId: "news-letter-7649f",
    storageBucket: "news-letter-7649f.appspot.com",
    messagingSenderId: "953119074525",
    appId: "1:953119074525:web:07855983998bb9bbb61334",
    measurementId: "G-923FZFMES7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();