// Module Imports
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

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

mongoose.connect(process.env.MONGODB_URL!)
    .then( () => {
        console.log(`Started on port ${PORT}`);
        app.listen(PORT);
    });

