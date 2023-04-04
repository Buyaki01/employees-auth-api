const logEvents = require('./logEvents')
const EventEmitter = require('events')
class  Emitter extends EventEmitter{}
const myEmitter = new Emitter()
// myEmitter.on('log', (msg) => logEvents(msg))
// myEmitter.emit('log', 'Log event emitted!')


