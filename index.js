const fs = require('fs')

fs.readFile('./files/starter.txt', (err, data) => {
  if(err) throw err
  console.log(data.toString())
})


