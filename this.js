const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
this.name = 'new event emitter'
myEmitter.on('event', (a, b,c) => {
  console.log(a, b, c, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b','c');