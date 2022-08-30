const express = require("express");
const routes = express.Router();
const controller = require("../controller/myController");
const axios = require("axios");

//landing page
routes.get('/' , (req , res) => {
    axios.get('http://localhost70001/sail/users')
    .then(res=>{
        res.render('index' , {users: res.data})
    })
});


routes.get('/addUser' , (req , res) => {
    res.render('add-User')
});

// create
routes.post('/sail/users' , controller.create);

//read
routes.get('/sail/users' , controller.find);

//update
routes.put('sail/users/:id' , controller.update);

//delete
routes.delete('/sail/users:id');

module.exports = routes;