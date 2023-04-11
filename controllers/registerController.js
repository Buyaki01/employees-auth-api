const usersDB = {
  users: require('../model/users.json'),
  setUsers: function(data) {this.users = data}
}

const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body
  if(!user || !pwd) return res.status(400).json({ 'message': 'Username and Password are required.' })
  // Check for duplicate usernames in the database
  const duplicate = usersDB.users.find(person => person.username === user)
  if(duplicate) return res.sendStatus(409) //Conflict
  try{
    //encrypt the password
    
  }catch(err){
    res.status(500).json({ 'message': err.message })
  }
}
