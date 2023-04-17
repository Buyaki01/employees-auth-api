const verifyRoles = (...allowedRoles) => {
  return(req, res, next) => {
    if (!req || !req.roles ) return res.sendStatus(401)
    const rolesArray = [...allowedRoles]
    console.log(rolesArray)
    console.log(req.roles) //coming from the verifyJWT, verifyJWT middleware will be executed before verifyRoles middleware
    const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true)
    if (!result) return res.sendStatus(401)
    next()
  }
}

module.exports = verifyRoles
