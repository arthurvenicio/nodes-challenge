import { Request, Response, NextFunction } from "express";

import { v4 } from "uuid";

import { db } from "../config/firebase";

export async function CreateNote(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description } = req.body;
  const id = v4();
  const status = true;

  // console.log(req.body);

  if (title && description) {
    try {
      await db.collection("notes").doc(id).set({ title, description });
      res.status(200).send({ ...req.body, status });
      // console.log("foi");
    } catch (error) {
      res.status(404).send(error.message);
    }
  } else {
    res.status(404).send({ status: "error" });
  }
}

export async function GetNote(
  req: Request,
  res: Response,
  next: NextFunction
) {}
