const productManagerController= require('../controller/productManager.controller')

module.exports =(app)=>{
    // create product manager 
    app.post('/', productManagerController.createProduct)
    app.get('/',productManagerController.getAllProducts)
    app.get('/:id',productManagerController.getOneProduct)
}