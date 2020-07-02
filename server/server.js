const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeRoutes = express.Router();
const PORT = 4000;

let Employee = require('./employeelist.model');

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://127.0.0.1:27017/merndb', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established");
})

employeeRoutes.route('/').get(function (req, res) {
    Employee.find(function (err, merndb) {
        if (err) {
            console.log(err);
        } else {
            res.json(merndb);
        }
    });
});

employeeRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Employee.findById(id, function (err, merndb) {
        res.json(merndb);
    });
});

employeeRoutes.route('/createEmployee').post(function (req, res) {
    Employee.find({ email: req.body.email })
        .then(Emp => {
            if (Emp.length >= 1) {
                return res.status(404).json({
                    message: "Employee exists...Try with new"
                });
            } else {
                let employee = new Employee(req.body);
                employee.save()
                    .then(employee => {
                        res.status(200).json({ 'employee': 'Employee added succesfully' });
                    })
                    .catch(err => {
                        res.status(400).send('creating employee failed')
                    });
            }
        })
        .catch(err => console.log(err));

});

employeeRoutes.route('/:id').delete(function (req, res) {
    Employee.findById(req.params.id, function (err, employee) {
        if (!employee)
            res.status(404).send('Employee not found');
        else
            employee.delete().then(employee => {
                res.json('Employee Deleted');
            })
                .catch(err => {
                    res.status(400).send("Delete not posible");
                });
    });
});

employeeRoutes.route('/editEmployee/:id').post(function (req, res) {
    Employee.findById(req.params.id, function (err, employee) {
        if (!employee)
            res.status(404).send('Employee not found');
        else
            employee.fullname = req.body.fullname;
            employee.username = req.body.username;
            employee.email = req.body.email;
            employee.mobile = req.body.mobile;
            employee.designation = req.body.designation;

        employee.save().then(employee => {
            res.json('Employee updated');
        })
            .catch(err => {
                res.status(400).send("update not posible");
            });
    });
});

app.use('/employee', employeeRoutes);

app.listen(PORT, function () {
    console.log("Server is running on the port : " + PORT);
});