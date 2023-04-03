const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
  if(err) throw err
  console.log(data)
})

//Will be displayed first
console.log('Hello...')

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
  if(err) throw err
  console.log('Write operation complete')
})

fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing text.', (err) => {
  if(err) throw err
  console.log('Append operation complete')
})

//Exit on Uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was uncaught error: ${err}`)
  process.exit(1)
})
