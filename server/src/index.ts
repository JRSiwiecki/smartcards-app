// Module Imports
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";

// Model Imports
import Deck from "./models/Deck";

// Controller Imports
import { getDecksController } from "./controllers/getDecksController";
import { createDecksController } from "./controllers/createDeckController";
import { deleteDecksController } from "./controllers/deleteDeckController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { getDeckController } from "./controllers/getDeckController";

// App Boilerplate
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
config();

// Deck Routes
app.get("/decks", getDecksController);
app.post("/decks", createDecksController);
app.delete("/decks/:deckId", deleteDecksController);

// Card Routes
app.get("/decks/:deckId", getDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URL!).then(() => {
  console.log(`Started on port ${PORT}`);
  app.listen(PORT);
});
