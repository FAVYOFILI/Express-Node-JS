import http, { IncomingMessage, ServerResponse } from "http"

const Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader ("Content-Type", "text/plain");
    res.write("I love Typescript");
    res.end()
})

Server.listen(5000, ()=> {
    console.log("Server is Loading at http://localhost:5000")
})
