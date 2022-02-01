//Importing the models
const model = require("../models/friends.model");

//GET controllers

//GET Individual friend
function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    // res.json(friend);
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend Does not exist",
    });
  }
}

//GET all of friends
function getFriends(req, res) {
  //res.send(model)
  res.json(model);
}

//POST controllers

//POST a friend
function postFriend(req, res) {
  //Data validation
  if (!req.body.name) {
    return res.status(400).json({
      error: "Friend doesnt exist",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);

  res.json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
