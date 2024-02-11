const teamManagerController=require('../controller/teamManager.controller')

module.exports =(app)=>{
    // create player route 
    app.post('/api',teamManagerController.createPlayer)
    // get all players
    app.get('/list',teamManagerController.getAllPlayers)
    // get one player
    app.get('/:id',teamManagerController.getOnePlayer)
    // delete player
    app.delete('/:id', teamManagerController.deleteOnePlayer)
    // update player
    app.put('/edit/:id',teamManagerController.updateOnePlayer)
}