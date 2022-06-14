// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

// on-lsiten for an event
// emit-emit an event
const EventEmitter = require('events')

//customEmitter is an instance of the class EventEmiiter()
const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

//'response'-here the string is the name of the event

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)
