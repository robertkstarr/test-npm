import * as firebase from 'firebase';

function sendToFirebase(props){
    const config = {
        "databaseURL": "https://starr-meal-planner.firebaseio.com",
        "type": "service_account",
        "project_id": "starr-meal-planner",
        "private_key_id": "e09578f4e5834e72002ac4572626cfd3f69a323c",
        // eslint-disable-next-line
        "private_key": "${{firebase_private_key}}",
        "client_email": "firebase-adminsdk-riq4z@starr-meal-planner.iam.gserviceaccount.com",
        "client_id": "106764212743250830411",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-riq4z%40starr-meal-planner.iam.gserviceaccount.com"
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    const databaseRef = firebase.database().ref();
    databaseRef.child("todos").set(Math.random())
}

export default sendToFirebase;