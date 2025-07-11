// For Javascript
// const http = require("http")

//For Typescript
import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.write("Hello World");
    res.end();
  }
);

server.listen(4000, () => {
  console.log("Server is listening to http://localhost:4000");
});
