import { Request, Response, NextFunction } from "express";

export async function CreateNote(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description } = req.body;
  const status = true;

  if (title && description) {
    res.status(200).send({ ...req.body, status });
    console.log(title);
  } else {
    res.status(404).send({ status: "error" });
  }
}
