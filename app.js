const express = require('express');
const app = express();

// Middleware
app.use(express.json());

app.get("/", (req,res) => {
  console.log('Get method');
  res.send('Hello World');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
