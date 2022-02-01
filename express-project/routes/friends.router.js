const express = require("express");
const friendsController = require("../controllers/friends.controller");

//Router
const friendsRouter = express.Router();

//Middleware specific to friendsRouter

//This Middleware gives us the IP address
friendsRouter.use((req, res, next) => {
  console.log("ip address : ", req.ip);
  next();
});

//GET all the data(friends)
friendsRouter.get("/", friendsController.getFriends);

//GET the specific data(friend)
friendsRouter.get("/:friendId", friendsController.getFriend);

//POST friend
friendsRouter.post("/", friendsController.postFriend);

module.exports = friendsRouter;
