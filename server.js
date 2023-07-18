const express =require ('express');
const dotenv =require("dotenv").config();
const app=express();
const port=process.env.PORT || 3000;

app.get('/api/contacts',(req,res)=>{
  res.json({msg:'Get all the Contacts'});
})

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})