const { text } = require("body-parser");
const mongoose = require("mongoose");

const deliverySchema= new mongoose.Schema({
    UserID:{
        type:String,required:true
    }
    ,Email:{
        type:String,required:true
    }
    ,ShippingAddress:[
        {
            FirstName:{type:String,required:true},
            LastName:{type:String,required:true},
            City:{type:String,required:true},
            Phone:{type:Number,required:true},
            Country:{type:String,required:true},
            State:{type:String,required:true},
            zip:{type:Number,required:true}
        }
    ]   
    
});
const Delivery=mongoose.model("delivery",deliverySchema)
exports.model=Delivery