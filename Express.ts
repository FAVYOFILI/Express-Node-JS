import http, { IncomingMessage, ServerResponse } from "http";

const Express = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.write("Welcome to Express Server");
      res.end();
    } else if (req.url === "/about" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.write("This is Express");
      res.end();
    } else {
      res.statusCode = 400;
      res.setHeader("Content-type", "text/plain");
      res.write("Page Not Found");
      res.end();
    }
  }
);


Express.listen(3000, () => {
    console.log("Express Server is running at http://localhost:3000");
})