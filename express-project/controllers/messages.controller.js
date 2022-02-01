//We use builtin path module to make the skimountain img available
const path = require("path");

//GET controllers

function getMessages(req, res) {
  // res.send("<ul><li>Helloo!!</ul></li>");
  res.sendFile(path.join(__dirname, "..", "public",'images', "skimountain.jpg"));
}

//POST controllers

function postMessage(req, res) {
  console.log("Updating messages");
}

//Exporting functions

module.exports = {
  getMessages: getMessages,
  postMessage,
};
