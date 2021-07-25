import * as admin from "firebase-admin";

const serviceAccount = require("../../agendeme-ef646-firebase-adminsdk-mxt18-8a7ea617d0.json");

// const firebaseConfig = {
//   apiKey: "AIzaSyBavOAyhaevMFy8oZoMCgqrbq_xCCbeQF8",
//   authDomain: "agendeme-ef646.firebaseapp.com",
//   projectId: "agendeme-ef646",
//   storageBucket: "agendeme-ef646.appspot.com",
//   messagingSenderId: "749891001947",
//   appId: "1:749891001947:web:716bd25dbb8fc4a0c9697e",
// };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
