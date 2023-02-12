const express = require('express');

const app = express();

app.get("/m1",(req,res)=>{
    res.send("I am m1");
})

app.listen(3000,()=>{
    console.log("Server is running on Port 3000")
})