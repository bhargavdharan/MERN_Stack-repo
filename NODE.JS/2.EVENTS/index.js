// loading eventEmitter constructor

var EventEmitter = require('events').EventEmitter;

//IN this case, we want logger to emit events by adding a listener

var logger = new EventEmitter();

// the following code demonstrates the syntax for listening to error event, and execute the callback function

logger.on('error',function(msg){
    console.log('ERR:' + msg);
})

// the following code triggers the error event

logger.emit('error', 'This is 1st error')
logger.emit('error', 'This is 2nd error')