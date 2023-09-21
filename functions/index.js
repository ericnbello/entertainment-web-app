const functions = require("firebase-functions");
const { initializeApp } = require("firebase-admin/app");
const { database } = require("firebase-admin");

initializeApp();

exports.deleteOldItems = functions.database.ref('/media/{id}')
    .onWrite((change, context) => {
        const cutoff = Date.now() - (2 * 60 * 60 * 10); // 2 hours in milliseconds

        if (change.after.exists() && (!change.before.exists() || change.after.val().timestamp !== change.before.val().timestamp)) {
            return null;
        }

        const ref = change.after.ref;
        const oldItemsQuery = ref.parent.orderByChild('timestamp').endAt(cutoff);

        return oldItemsQuery.once('value').then(snapshot => {
            const updates = {};

            snapshot.forEach(child => {
                if (child.val().timestamp <= cutoff) {
                    updates[child.key] = null;
                }
            });

            return ref.parent.update(updates);
        });
    });

exports.scheduledFunction = functions.pubsub.schedule('every 24 hours').timeZone('America/New_York').onRun((context) => {
    const cutoff = Date.now() - (2 * 60 * 60 * 10);

    const ref = admin.database().ref('/media/{id}');
    const oldItemsQuery = ref.orderByChild('createdAt').endAt(cutoff);

    return oldItemsQuery.once('value').then(snapshot => {
        const updates = {};

        snapshot.forEach(child => {
            if (child.val().timestamp <= cutoff) {
                updates[child.key] = null;
            }
        });

        return ref.update(updates);
    });
});

// exports.addTimestamp = functions.https.onCall(async (data, context) => {
//     const id = data.id;
//     const mediaRef = admin.database().ref(`/media/${id}`);
//     await mediaRef.set({
//         'createdAt': { ".sv": "timestamp" },
//     });
// })
exports.addTimestamp = functions.database.ref('/media/{id}')
    .onCreate((snapshot, context) => {
        const timestamp = admin.database.ServerValue.TIMESTAMP;
        return snapshot.ref.child('createdAt').set(timestamp);
    });