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
  
  //Inside of a callback of writeFile
  fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Nice to meet you too.', (err) => {
    if(err) throw err
    console.log('Append operation complete')

    //Inside of a callback of appendFile
    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
      if(err) throw err
      console.log('Rename operation complete')
    })
  })
})


//Exit on Uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was uncaught error: ${err}`)
  process.exit(1)
})
