// Module Imports
import { Request, Response } from "express";

// Model Imports
import Deck from "../models/Deck";

export async function createDecksController(req: Request, res: Response) {
  const newDeck = new Deck({
    title: req.body.title,
  });

  const createdDeck = await newDeck.save();
  res.json(createdDeck);
}
