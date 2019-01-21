var express = require('express');
var app = express();
var employees = [];

app.use(express.json());

app.post('/addEmployee', function (req, res) {
  employees.push({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    salary: req.body.salary,
    jobStartDate: req.body.jobStartDate
  })
  response = {
    status: 'success'
  };
  console.log(employees);
  res.end(JSON.stringify(response));
})

app.get('/getEmployees', function (req, res) {
  response = {
    status: 'success',
    data: employees
  };
  console.log('getEmployees', response);
  res.end(JSON.stringify(response));
})

app.post('/deleteEmployee', function (req, res) {
  employees.splice(req.body.index, 1);

  response = {
    status: 'success'
  };
  console.log('deleteEmployee', response);
  res.end(JSON.stringify(response));
})

app.post('/editEmployee', function (req, res) {
  const employeeData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    salary: req.body.salary,
    jobStartDate: req.body.jobStartDate
  };

  employees[req.body.employeeIndex] = employeeData;

  response = {
    status: 'success'
  };
  console.log('editEmployee', response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at: ", host, port)
})