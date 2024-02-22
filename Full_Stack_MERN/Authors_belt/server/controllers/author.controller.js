const authorController= require('../models/author.model')

module.exports.createAuthor=(request,response)=>{
    authorController.create(request.body)
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err))
}
module.exports.getAllAuthors=(req,resp)=>{
    authorController.find()
    .then(author=>resp.json(author))
    .catch(err=> console.log(err))
}
module.exports.getOneAuthor = (request, response) => {
    authorController.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}
module.exports.deleteOneAuthor = (request, response) => {
    authorController.deleteOne({_id:request.params.id})
        .then(deleteConfirmation  => response.json(deleteConfirmation))
        .catch(err => response.json(err));
}
module.exports.updateOneAuthor = (request, response) => {
    authorController.updateOne(
        {_id:request.params.id}
        ,request.body,
        {new:true,runValidators:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err));
}

