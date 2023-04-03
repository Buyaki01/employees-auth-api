const fs = require('fs')

fs.readFile('./files/starter.txt', 'utf-8', (err, data) => {
  if(err) throw err
  console.log(data)
})

//Will be displayed first
console.log('Hello...')

//Exit on Uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was uncaught error: ${err}`)
  process.exit(1)
})
