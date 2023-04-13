const express = require('express')
const router = express.Router()
const employeesController = require('../../controllers/emplyoyeesController')
const verifyJWT = require('../../middleware/verifyJWT')

router.route('/')
  .get(verifyJWT, employeesController.getAllEmployees) //If we just want it in the get
  .post(employeesController.createNewEmployees)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee)

  router.route('/:id')
    .get(employeesController.getEmployee)

module.exports = router
