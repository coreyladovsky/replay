import * as firebase from 'firebase';
let database;


export const init = () => {

  let config = {
    apiKey: "AIzaSyCXI_kLNNSMMR-R_7uVvzy7x72K5FTnZuc",
    authDomain: "corey-replaylistings.firebaseapp.com",
    databaseURL: "https://corey-replaylistings.firebaseio.com",
    projectId: "corey-replaylistings",
    storageBucket: "corey-replaylistings.appspot.com",
    messagingSenderId: "763856852812"
  };
  firebase.initializeApp(config);
  database = firebase.database();

};
