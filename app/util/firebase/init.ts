import * as firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCy9e2PaktV5U2b4D4y8Hg19qdyHn9noVM",
  authDomain: "new-test-786ba.firebaseapp.com",
  databaseURL: "https://new-test-786ba.firebaseio.com",
  projectId: "new-test-786ba",
  storageBucket: "new-test-786ba.appspot.com",
  messagingSenderId: "412724397036",
  appId: "1:412724397036:web:7102f38c153d2f16"
};

export default () => firebase.initializeApp(config);
