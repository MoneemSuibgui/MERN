const mongoose=require('mongoose')

const productManagerSchema=new mongoose.Schema({
    title:{
        type:String,
        // set up our validation 
        required:[true,'* Title of product manager is required'],
        minLength:[3,'* Title must at least 3 characters']
    },
    price:{
        type:Number,
        required:[true,'* Price of product manager is required'],
        // enum : if the user type another number doesn't exit in the intire array it will show him an error
        // enum:[100,200,250,300,350,450,500,700,900,950,100]
    },
    description:{
        type:String
    }
},{timestamps:true})
module.exports=mongoose.model('Product_Manager',productManagerSchema)
