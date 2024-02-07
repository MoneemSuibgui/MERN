// import mongoose to connecting with mongo db
const mongoose=require("mongoose")

// set up monggose.connect function 
mongoose.connect("mongodb://0.0.0.0/author_db",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('Established connection to the database'))
.catch(err=>console.log('Something went wrong when connecting to the database',err))