const express = require("express");
const messagesController = require("../controllers/messages.controller");

const messagesRouter = express.Router();

//GET all messages

messagesRouter.get("/", messagesController.getMessages);

//POST  message

messagesRouter.post("/", messagesController.postMessage);

module.exports = messagesRouter;
