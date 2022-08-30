var userDB = require("../model/model");

exports.create = (req , res) => {
    if (!req.body) {
        res.status(400).send({message: "Field cannot be empty"})
        return;
    }
    const user = new userDB({
        name: req.body.name,
        team : req.body.team,
        stack : req.body.stack,
        gender : req.body.gender
    })
    user.save(user)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

// READING
exports.find = (req , res) => {
    userDB.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message: "error retrieving details"})
    })
}

// UPDATING
exports.update = (req , res) => {
    if (!req.body){
        return res.status(400).send({message: "no data"})
    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id , req.body, {useFindAndModify: false})
    .then(data => {
       if (!data) {
        res.data(404).send({message: "no user id"})
       }
       else {
        res.send(data)
       }
    })
    .catch (err => {
        res.status(500).send({message: "nothing to do"})
    })
}