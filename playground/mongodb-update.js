//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5bd42d1c92fb2c7659faf1ef')
//    }, {
//         $set: {
//             completed: true
//         }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });

   db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bbb1486eed38b574ccad443')
}, {
     $set: {
         name: 'Nick'
     },
     $inc: {
         age: +1
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});


    //db.close();
});