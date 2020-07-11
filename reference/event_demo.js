const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());

class Event_demo extends EventEmitter {
  log(msg) {
    this.emit('message', {id: uuid.v4(), msg});
  }
}

module.exports = Event_demo;
