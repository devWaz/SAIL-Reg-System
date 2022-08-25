const express = require("express");
const routes = express.Router();

routes.get('/' , (req , res) => {
    res.render('index')
})

routes.get('/addUser' , (req , res) => {
    res.render('add-User')
})

module.exports = routes;