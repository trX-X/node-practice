const express = require("express");

const app = express();

const PORT = 3000;

//Friends Array for data to work on

const friends = [
  {
    id: 0,
    name: "Steve Jobs",
  },
  {
    id: 1,
    name: "Nikola Tesla",
  },
];

//Middleware

//This middleware is for logging
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url}  ${delta}ms`);
});

//This middleware is for parsing
app.use(express.json());

//GET Requests

//GET all the data(friends)
app.get("/friends", (req, res) => {
  //res.send(friends)
  res.json(friends);
});

//GET the specific data(friend)
app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    // res.json(friend);
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend Does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Helloo!!</ul></li>");
});

//POST Requests

app.post("/friends", (req, res) => {
  //Data validation
  if (!req.body.name) {
   return res.status(400).json({
      error: "Friend doesnt exist",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);

  res.json(newFriend);
});

app.post("/messages", (req, res) => {
  console.log("Updating messages");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT : ${PORT}`);
});
