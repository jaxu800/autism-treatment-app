import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0TVzAHdnHivKOanYEYHjl0IeaFPx4-tI",
    authDomain: "autism-treatment-app.firebaseapp.com",
    databaseURL: "https://autism-treatment-app-default-rtdb.firebaseio.com",
    projectId: "autism-treatment-app",
    storageBucket: "autism-treatment-app.appspot.com",
    messagingSenderId: "333922298937",
    appId: "1:333922298937:web:79270e33d6f71ae1dc71e8"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;