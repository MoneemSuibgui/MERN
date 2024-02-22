const mongoose=require('mongoose')

const authorSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'* First Name of Author is required'],
        minLength:[3,'* First name must be at least 3 characters']
    },
    lastname:{
        type:String,
        required:[true,'* Last Name of Author is required'],
        minLength:[3,'* Last name must be at least 3 characters']
    },
    age:{
        type:Number,
        required:[true,'* Age of author is require '],
        min:[18,'* Age of Author must more than 18 years old'],
        max:[99,'* Age of Author must less than 100 years old']
    },
    adresse:{
        type:String,
        required:[true,'* Adresse is require'],
        minLength:[5,'* Please Enter your right adresse must at least 5 characters ']
    }
},{timestamps:true})
module.exports=mongoose.model('Author',authorSchema)
