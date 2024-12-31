const express=require("express");
const route = express.Router();
const stuController=require("../Controller/stuController");
route.post("/savedata",stuController.Datasave);



module.exports=route;