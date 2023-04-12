const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization']
  if(!authHeader) return res.sendStatus(401) //Unauthorized
  console.log(authHeader) //Bearer Token
  const token = authHeader.split(' ')
}

module.exports = {verifyJWT}
