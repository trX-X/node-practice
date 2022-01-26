const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race', (result) => {
  if (result === 'win') {
    console.log('Congratulations for winning!');
  }
});

celebrity.on('race', (result) => {
  if (result === 'win') {
    console.log("I could've done it better");
  }
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
