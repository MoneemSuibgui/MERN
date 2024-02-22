const AuthorController=require('../controllers/author.controller')

module.exports =(app)=>{
    // all routes
    app.post('/new/',AuthorController.createAuthor)
    app.get('/',AuthorController.getAllAuthors)
    app.get('/:id',AuthorController.getOneAuthor)
    app.delete('/:id',AuthorController.deleteOneAuthor)
    app.put('/edit/:id',AuthorController.updateOneAuthor)
}