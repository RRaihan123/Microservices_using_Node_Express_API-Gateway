const express = require('express');

const app = express();

app.get("/m2",(req,res)=>{
    res.send("I am m2");
})

app.listen(3001,()=>{
    console.log("Server is running on Port 3001")
})