const express = require("express");
const routes = express.Router();
const controller = require("../controller/myController")

routes.get('/' , (req , res) => {
    res.render('index')
})

routes.get('/addUser' , (req , res) => {
    res.render('add-User')
})

routes.post('/sail/users' , controller.create)

module.exports = routes;