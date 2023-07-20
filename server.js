const { MongoClient } = require("mongodb");

// Connection URI for the MongoDB server running on localhost, default port 27017
const uri = "mongodb://localhost:27017/";

// Name of the  database
const databaseName = "All_Glory_to_Jesus";

// Function to connect to MongoDB, create a database, and add a collection
async function createDatabaseAndCollection() {
  const client = new MongoClient(uri);
  console.log(client)
  try {
    // Connect to MongoDB
    await client.connect();

    
   await client.db(databaseName).dropDatabase();

    console.log(`${databaseName} dropped successfully!`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection to the MongoDB server
    client.close();
  }
}

// Call the function to create the database and collection
createDatabaseAndCollection();
