const express = require("express")
const EmployeeModel = require("../models/employees")
const routes = express.Router()

//Lists all Employees
routes.get('/employees', (req, res) => {
    EmployeeModel.find()
        .then((employees) => {
            res.status(200).send(employees)
        }).catch((err) => {
            res.status(500).send({message: err.message})
        })
    //res.status(200)
    //res.send('<h1>List of all employees</h1>')
})

//Create a new Employee
routes.post('/employees', async (req, res) => {
    const employeeData = req.body
    console.log(employeeData)
    try {
        // Create a new employee instance
        const employee = new EmployeeModel(employeeData)
        // Save the employee to MongoDB
        const newEmployee = await employee.save()
        res.status(201).send({
            message: "Employee created successfully.",
            employee_id: newEmployee._id
        })
    } catch (err) {
        res.status(500).send({message: err.message})
    } 
    //res.status(201)
    //res.send('<h1>Create an employee</h1>')
})

//Get specific Employee by ID
routes.get('/employees/:employeeid', (req, res) => {
    EmployeeModel.findById(req.params.employeeid)
    .then((employee) => {
        if(employee) {
            res.status(200).send(employee)
        } else {
            res.status(404).send({message: "Employee not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
})

//Update an Employees details
routes.put('/employees/:employee_id', (req, res) => {
    res.status(200)
    console.log(req.query);
    let employee_id = req.query.employee_id

    res.json({ employee_id })
})

//Delete an Employee
routes.delete('/employees/:employee_id', (req, res) => {
    res.status(204)
    console.log(req.query)
    let employee_id = req.query.employee_id

    res.json({ employee_id})
})

module.exports = routes