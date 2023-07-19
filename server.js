const { MongoClient } = require("mongodb");

// Connection URI for the MongoDB server running on localhost, default port 27017
const uri = "mongodb://localhost:27017/";

// Name of the new database
const databaseName = "All_Glory_to_Jesus";

// Data to be inserted into the collection
const collectionData = { name: "joel" };

// Function to connect to MongoDB, create a database, and add a collection
async function createDatabaseAndCollection() {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();

    // Get a reference to the new database
    const database = client.db(databaseName);

    // Create a new collection and insert data
    const collection = database.collection("mycollection");
    await collection.insertOne(collectionData);

    console.log("Database and collection created successfully!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection to the MongoDB server
    client.close();
  }
}

// Call the function to create the database and collection
createDatabaseAndCollection();
