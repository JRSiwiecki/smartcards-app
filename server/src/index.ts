// Module Imports
import express, { Request, Response } from "express";
import mongoose from "mongoose";
require("dotenv").config();

// Model Imports
import Deck from "./models/Deck";

// App Boilerplate
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Smartcards!");
});

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title
    });

    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose.connect(
    "mongodb+srv://jrsiwiecki:" + process.env.DB_PASSWORD + "@smartcards.eeafzig.mongodb.net/?retryWrites=true&w=majority"
    )
    .then( () => {
        console.log(`Started on port ${PORT}`);
        app.listen(PORT);
    });

