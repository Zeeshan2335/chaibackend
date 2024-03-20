const express = require("express");
require('dotenv').config()
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter",(req,res)=>{
    res.send("twitter")
})
app.get("/login",(req,res)=>{
    res.send('<h1>Please Login at chai aur code </h1>')
})

app.get('/youtube',(req,res)=>{
    console.log('chai aur code');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
