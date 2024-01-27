const productManagerController= require('../controller/productManager.controller')

module.exports =(app)=>{
    // create product manager 
    app.post('/', productManagerController.createProduct)
}