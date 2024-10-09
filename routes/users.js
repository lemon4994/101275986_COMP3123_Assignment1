const express = require("express")
const UserModel = require("../models/users")

const routes = express.Router()

// http://localhost:3000/api/v1/user/signup
app.post('/api/v1/user/signup', (req, res) => {
    res.status(201)
    res.send('<h1>POST - Create an account</h1>');
})

// http://localhost:3000/api/v1/user/login
app.post('/api/v1/user/login', (req, res) => {
    res.status(200)
    res.send('<h1>POST - Log into an account</h1>');
})