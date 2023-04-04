const logEvents = require('./logEvents')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

//Initialize object
const myEmitter = new MyEmitter()

//Add Listener for the log event
myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
  //Emit Event
  myEmitter.emit('log', 'Log event emitted!')
}, 2000)
