// import our model
    const teamManagerController= require('../models/teamManager.model')

    module.exports.createPlayer=(request,response)=>{
        teamManagerController.create(request.body)
        .then((player) => response.json(player))
        .catch(err => response.status(400).json(err))
    }
    module.exports.getAllPlayers=(req,resp)=>{
        teamManagerController.find()
        // sort all players name alphabeticaly Desc
        
        .then(player=>resp.json(player))
        .catch(err=> console.log(err))
    }
    module.exports.getOnePlayer = (request, response) => {
        teamManagerController.findOne({_id:request.params.id})
            .then(player => response.json(player))
            .catch(err => response.json(err));
    }
    module.exports.deleteOnePlayer = (request, response) => {
        teamManagerController.deleteOne({_id:request.params.id})
            .then(deleteConfirmation  => response.json(deleteConfirmation))
            .catch(err => response.json(err));
    }
    module.exports.updateOnePlayer = (request, response) => {
        teamManagerController.updateOne(
            {_id:request.params.id}
            ,request.body,
            {new:true,runValidators:true})
            .then(updatedPlayer => response.json(updatedPlayer))
            .catch(err => response.status(400).json(err));
    }


