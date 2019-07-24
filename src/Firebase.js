import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
apiKey: "AIzaSyBSIuP4z_s_UcbmSUfhVKdzysVtxRTqjwQ",
    authDomain: "coba2-df5b8.firebaseapp.com",
    databaseURL: "https://coba2-df5b8.firebaseio.com",
    projectId: "coba2-df5b8",
    storageBucket: "coba2-df5b8.appspot.com",
};
firebase.initializeApp(config);

firebase.firestaore().settings(settings);

export default firebase;
