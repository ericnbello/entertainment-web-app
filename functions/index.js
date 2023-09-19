const functions = require("firebase-functions");
const { initializeApp } = require("firebase-admin/app");
// const { getFirestore } = require("firebase-admin/firestore")

initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.deleteOldItems = functions.database.ref('/media/')
.onWrite((change, context) => {
  var ref = change.after.ref.parent; // reference to the items
  var now = Date.now();
  var cutoff = now - 2 * 60 * 60 * 1000;
  var oldItemsQuery = ref.orderByChild('timestamp').endAt(cutoff);
  return oldItemsQuery.once('value', function(snapshot) {
    // create a map with all children that need to be removed
    var updates = {};
    snapshot.forEach(function(child) {
      updates[child.key] = 0;
    });
    // execute all updates in one go and return the result to end the function
    return ref.update(updates);
  });
});

exports["myfunc"] = runWith({secrets: ["REACT_APP_TMDB_API_KEY"]}).https.onCall(() => {
  process.env.REACT_APP_TMDB_API_KEY
})  