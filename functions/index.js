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
// exports.deleteOldItems = functions.database.ref('/media/{id}/')
// .onWrite((change, context) => {
//   if (!)
//   var ref = change.after.ref.parent; // reference to the items
//   var now = Date.now();
//   var cutoff = now - (2 * 60 * 60 * 1000);
//   var oldItemsQuery = ref.orderByChild('/{id}/timestamp').endAt(cutoff);
//   return oldItemsQuery.once('value', function(snapshot) {
//     // create a map with all children that need to be removed
//     var updates = {};
//     snapshot.forEach(function(child) {
//       updates[child.key] = 0;
//     });
//     // execute all updates in one go and return the result to end the function
//     return ref.update(updates);
//   });
// });

exports.deleteOldItems = functions.database.ref('/media/{id}')
.onWrite((change, context) => {
  // Only proceed if data is being created (not updated)
  // if (!change.after.exists() || change.before.exists()) {
  //   return null;
  // }

  const ref = change.after.ref; // reference to the item
  const now = Date.now();
  const cutoff = now - (2 * 60 * 60);

  // Create a reference to the parent node
  const parentRef = ref.parent;

  // Query for old items
  const oldItemsQuery = parentRef.orderByChild('timestamp').endAt(cutoff);

  return oldItemsQuery.once('value').then(snapshot => {
    // Create a map with all children that need to be removed
    const updates = {};

    snapshot.forEach(child => {
      // Check if the child is older than the cutoff
      if (child.val().timestamp <= cutoff) {
        updates[child.key] = null; // Setting value to null deletes the item
      }
    });

    // Execute all updates in one go and return the result to end the function
    return parentRef.update(updates);
  });
});
