
const stuModel=require("../Model/stuModel");


const Datasave=async(req,res)=>{
    const{rollno,name,city,fees}=req.body;
    const myData = await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees

    })
    res.send(myData);
    console.log(myData);

}
module.exports={
    Datasave
}