const productManager = require("../model/productManager.model")

module.exports.createProduct=(req,res)=>{
    productManager.create(req.body)
    .then(newProduct => res.json({product:newProduct}))
    .catch(err =>console.log({message:'Something went wrong when creating new product',error:err}))
}