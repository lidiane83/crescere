const userModel = require ("../models/user");

class UserController{
    //post - Criar usuario

    async store(req, res){

       const user = await userModel.create(req.body);

       console.log(user);
       return res.status(201).json({user});
    }
    //deletar
    destroy(req, res){
        
    }
    update(req, res){
        
    }
    show(req, res){
        
    }
    index(req, res){
       
    }

}

module.exports = new UserController();