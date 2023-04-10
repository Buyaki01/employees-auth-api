const express = require('express')
const router = express.Router()
const path = require('path')

router.route('/')
  .get()
  .post()
  .put()
  .delete()

  router.route('/:id')
    .get()

module.exports = router
