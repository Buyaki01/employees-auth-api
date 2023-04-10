const data = {
  employees: require('../model/employees.json'),
  setEmployees: function (data) { this.employees = data }
}

const getAllEmployees = (req, res) => {
  res.json(data.employees)
}

const createNewEmployees = (req, res) => {
  res.json({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname
  })
}

const updateEmployee = (req, res) => {
  res.json({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname
  })
}

const deleteEmployee = (req, res) => {
  res.json({ "id": req.body.id })
}

const getEmployee = (req, res) => {
  res.json({"id": req.params.id})
}

module.exports = {
  getAllEmployees, createNewEmployees, updateEmployee, deleteEmployee, getEmployee
}
