const functions = require("firebase-functions");
const { initializeApp } = require("firebase-admin/app");
// const { getFirestore } = require("firebase-admin/firestore")
initializeApp()

// exports.useSecrets = functions.database.ref('/media/').runWith({secrets: ["REACT_APP_TMDB_API_KEY"]}).https.onCall(() => {
//     process.env.REACT_APP_TMDB_API_KEY
//   });

  exports.getApiKey = functions.https.onCall((data, context) => {
    const apiKey = functions.config().tmdb_api.key;
    return { apiKey };
  });