const httpserver = require("http");

const port = process.env.port || 6000;
const server = httpserver.createServer((req, res) => {
  res.statusCode = 200;
  res.getHeader("Content-Type", "text/html");
  res.end("<h1>this is my server</h1>");
});

server.listen(port, () => {
  console.log("server is listening to this port " + port);
});
