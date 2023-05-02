import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
const db = mongoose.connect(
    "mongodb+srv://jrsiwiecki:" + process.env.PASSWORD + "@smartcards.eeafzig.mongodb.net/?retryWrites=true&w=majority"
    );

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Smartcards!");
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, world!");
});

app.listen(3000);