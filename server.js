// create a basic express program with a server and the response message with hello

const express = require('express');
const mongodb= require('mongodb');
const app = express();

const url= 'mongodb://localhost:27017';

const MongoClient = mongodb.MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('Error in connecting to database');
  };
  console.log("Database created!");
  db.close();
});

app.get('/', (req, res) => {
  res.send('Hello');
}
)

// connect with database mongodb
app.listen(5001, () => {
  console.log('Server is running on port 5001');
}
)
