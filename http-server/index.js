//Our first server
const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Tesla",
  },
  {
    id: 1,
    name: "Isaac Newton",
  },
  {
    id: 2,
    name: "Modi",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");

  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log("Request", friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>This is an example</h1>");
    res.write("<h2>our server responds with html </h2>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   res.end(
//     JSON.stringify({
//       id: 1,
//       name: "Isaac Newton",
//     })
//   );
// });

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
