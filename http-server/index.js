//Our first server
const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(
      JSON.stringify({
        id: 1,
        name: "Isaac Newton",
      })
    );
  } else if (req.url === "/messages") {
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
