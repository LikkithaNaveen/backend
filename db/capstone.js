const mongoose=require('mongoose')


const CapstoneSchema=new mongoose.Schema({
    id:String,
    name:String,
    capstonetitle:String,
    language:String,
    status:String,
    desc:String

});

module.exports =mongoose.model("Capstonedetails",CapstoneSchema)