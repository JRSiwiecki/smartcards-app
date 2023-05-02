import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Smartcards!");
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, world!");
});

app.listen(3000);