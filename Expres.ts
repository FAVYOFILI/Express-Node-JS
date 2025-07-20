import express, { Application, Request, Response} from "express"
// import { request } from "http";

const App:Application = express()
const port =3060;

App.get("/", (req:Request, res:Response ) => {
    res.status(200).send("Express Server")
})

App.get("/home", (req:Request, res:Response)=> {
    res.status(200).send("This is home page")
})

App.get("/about", (req:Request, res:Response) => {
    res.status(200).send("This is about page")
})

App.get("/contact", (req:Request, res:Response)=>{
    res.status(200).send("This is contact page")
})

App.get ("/service", (req:Request, res:Response)=> {
    res.status(200).send("THis is service page")
})

App.listen (port, ()=> {
    console.log(`Express is running at http://localhost:${port}`)
})
