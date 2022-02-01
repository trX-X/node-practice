//GET controllers

function getMessages(req, res) {
  res.send("<ul><li>Helloo!!</ul></li>");
}

//POST controllers

function postMessage(req, res) {
  console.log("Updating messages");
}


//Exporting functions

module.exports = {
  getMessages : getMessages,
  postMessage,
};
