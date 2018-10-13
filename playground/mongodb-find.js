//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bc1621d92fb2c7659fae63f')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("unablet o fetch todos", err);
    // });
    //db.close();

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos: ${count}`);
    // }, (err) => {
    //     console.log("unablet o fetch todos", err);
    // });

    db.collection('Users').find({
        name: 'Nick'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("unablet o fetch todos", err);
    });
});