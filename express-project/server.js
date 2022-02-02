const path = require("path");

const express = require("express");

//Router Import
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

//Controller imports

const app = express();

//Express settings

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

//Middleware

//This middleware is for logging
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url}  ${delta}ms`);
});

//express.static is a middleware which we use to serve the frontend
app.use("/site", express.static(path.join(__dirname, "public")));

//This middleware is for parsing
app.use(express.json());

//Middleware for friendsRouter
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "My Friends",
    caption: "Lets go Skiing",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT : ${PORT}`);
});
