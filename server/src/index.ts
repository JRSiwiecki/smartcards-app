// Module Imports
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
config();

// Model Imports
import Deck from "./models/Deck";

// App Boilerplate
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/decks", async (req: Request, res: Response) => {
    
    // .find() gets all data from collection
    const decks = await Deck.find();
    res.json(decks);
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

