const express = require("express")
const app=express();
const port = 8900;

const mongoose =require("mongoose");
const stuRoute=require("./Routes/stuRoute");
const bodyParser = require("body-parser");
const cors=require("cors");



mongoose.connect("mongodb://127.0.0.1:27017/cybrom").then((res)=>{
    console.log("Db Connected!!!");
})

// body parser code from google
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())



app.use(cors())
app.use("/students",stuRoute);



app.listen(port, ()=>{
    console.log(`server run on ${port}`);
})
