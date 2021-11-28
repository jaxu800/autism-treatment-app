from flask import Flask, jsonify, request, json;
import pyrebase;
import json;

app = Flask(__name__)
app.config['DEBUG'] = True


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

symptomsList = db.child("symptoms").get()
treatmentList = db.child("treatmentAdverse").get()

@app.route('/symptomsList', methods=['GET'])
def symptoms():
    return symptomsList.val()

@app.route('/treatementsList', methods=['GET'])
def treatments():
    return treatmentList.val()

@app.route('/symptomsList/symp', methods=['POST'])
def symQuery():
    request_data = json.loads(request.data)
    query = db.child("symptoms").child(request_data['content']).get()

    return query.val()

if __name__ == '__main__':
    app.run(debug=True) 