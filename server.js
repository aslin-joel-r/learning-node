const { MongoClient } = require("mongodb");

// Connection URI for the MongoDB server running on localhost, default port 27017
const uri = "mongodb://localhost:27017/";

// Name of the new database
const databaseName = "All_Glory_to_Jesus";


const collectionData = { name: "joel" };

// Data to be updated
const updateedData={name:"I am  updated"}
// Function to connect to MongoDB, create a database, and add a collection
async function createDatabaseAndCollection() {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();

    // Get a reference to the new database
    const database = client.db(databaseName);

    // updating the  data
    const collection = database.collection("mycollection");
    await collection.updateOne(collectionData, { $set:updateedData});

    console.log("Database and collection updated successfully!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection to the MongoDB server
    client.close();
  }
}

// Call the function to create the database and collection
createDatabaseAndCollection();