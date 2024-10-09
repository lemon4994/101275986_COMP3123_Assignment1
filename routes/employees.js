const express = require("express")
const EmployeeModel = require("../models/employees")

const routes = express.Router()


app.get('/api/v1/emp/employees', (req, res) => {
    res.status(200)
    res.send('<h1>List of all employees</h1>')
})

app.post('/api/v1/emp/employees', (req, res) => {
    res.status(201)
    res.send('<h1>Create an employee</h1>')
})

app.get('/api/v1/emp/employees/', (req, res) => {
    res.status(200)
    console.log(req.query);
    let employee_id = req.query.employee_id || "0" //default params
    
    res.json({ employee_id });
})

app.put('/api/v1/emp/employees/:employee_id', (req, res) => {
    res.status(200)
    console.log(req.query);
    let employee_id = req.query.employee_id

    res.json({ employee_id })
})

app.delete('api/v1/emp/employees/:employee_id', (req, res) => {
    res.status(204)
    console.log(req.query)
    let employee_id = req.query.employee_id

    res.json({ employee_id})
})
