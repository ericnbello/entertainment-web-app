const functions = require("firebase-functions");
const { initializeApp } = require("firebase-admin/app");
initializeApp();

exports.deleteOldItems = functions.database.ref('/media/{id}')
.onWrite((change, context) => {
    const cutoff = Date.now() - (1 * 60 * 60 * 1000); // 1 hour in milliseconds

    // If a new item is created or an existing item is updated
    if (change.after.exists() && (!change.before.exists() || change.after.val().timestamp !== change.before.val().timestamp)) {
        return null; // Do nothing, let the new entry stay
    }

    // Otherwise, it's a delete or an unchanged entry
    const ref = change.after.ref; // reference to the item

    // Query for old items
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