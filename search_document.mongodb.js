/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('University');

// Search for documents in the current collection.
db.getCollection('students').aggregate([
    { $sort: {gpa: -1 } },

    { $limit: 10},

    { $project: { name: 1, gmpa: 1, registerDate: 1, fullTime: 1}}
]);
