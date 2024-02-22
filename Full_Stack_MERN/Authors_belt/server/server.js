// initialise what we need to our App
const express=require('express')
const app=express();
const port = 8000;
const cors=require('cors')

// this allows JSON Objects to be posted
app.use(express.json())

// this allows JSON Objects with strings and arrays
app.use(express.urlencoded({extended:true}))


app.use(cors())

// import our routes & config 
require('./routes/author.routes')(app);
require('./config/mongoose.config')


app.listen(port,()=>console.log(`My app run in port : ${port}`))