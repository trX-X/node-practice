function encrypt(data) {
  return 'encrypted data ';
}

function send(url, data) {
  const encyptedData = encrypt(data);
  console.log(`sending ${encyptedData} to ${url}`);
}

module.exports = {
  send,
};

