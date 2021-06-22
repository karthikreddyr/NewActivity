var Activitydb = require('../model/activity');
var Registrationdb = require('../model/model');
var logindetails = require('../const');
// create and save new user
exports.registration = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const registrationdb = new Registrationdb({
        userName:req.body.UserName,
        email : req.body.Email,
        password: req.body.Password
    })

    // save user in the database
    registrationdb
        .save(registrationdb)
        .then(data => {
            //res.send(data)
            res.redirect('/login');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new Activitydb({
        name : req.body.name,
        username : logindetails.username
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/activities');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}



// retrieve and return all users/ retrive and return a single user
exports.login = (req, res)=>{
    const registrationdata = {
        userName:req.body.UserName,
        password: req.body.Password
    };

    if(req.body.UserName){
        

        Registrationdb.find(registrationdata)
            .then(data =>{
                console.log(data)
                if(!data){
                    res.status(404).send({ message : "Not found user with email "+ registrationdata})
                }else{
                   // res.send(data)
                   logindetails.username = req.body.UserName;
                    res.redirect('/add-activity');
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with email " + registrationdata})
            })

    }else{
        res.status(500).send({ message: "Erro retrieving user with email " + registrationdata})
    }

    
}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Activitydb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Activitydb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Activitydb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data);
                //res.render('/activities',);


            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Activitydb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}