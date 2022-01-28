//working with http module from node

// const http = require('http');
// const http = require('https');
// const { request } = require('https');
const { get } = require('https');

// const req = request('https://www.google.com', (res) => {
get('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data chunk is : ${chunk}`);
  });

  res.on('end', () => {
    console.log('No more data');
  });
});

// req.end();   // Automatically passesd if we use 'get'
