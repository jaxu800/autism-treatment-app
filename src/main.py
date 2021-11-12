import pyrebase

firebaseConfig = {
    "apiKey": "AIzaSyDXRg0P6XZqSpwnpw2mirNPvwH9TRswlOI",
    "authDomain": "autism-treatment-app-c99c2.firebaseapp.com",
    "databaseURL": "https://autism-treatment-app-c99c2-default-rtdb.firebaseio.com",
    "projectId": "autism-treatment-app-c99c2",
    "storageBucket": "autism-treatment-app-c99c2.appspot.com",
    "messagingSenderId": "98415161975",
    "appId": "1:98415161975:web:ef96a75c1b1ab5e2584c72",
    "measurementId": "G-2GZXEL36HH"
}

firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()

temp = db.child("treatmentSymptoms").child("5-HTP").get()

print(temp.val())