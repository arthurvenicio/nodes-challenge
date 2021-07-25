import { Request, Response, NextFunction } from "express";

import { v4 } from "uuid";

import { db } from "../config/firebase";
import { Note } from "../models/notes";

type Notes = [];

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
      await db.collection("notes").doc(id).set({ title, description, id });
      res.status(200).send({ ...req.body, status, id });
      // console.log("foi");
    } catch (error) {
      res.status(404).send(error.message);
    }
  } else {
    res.status(404).send({ status: "error" });
  }
}

// export async function GetNotes(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const id = req.body.id;

//     const notes = !id
//       ? await db.collection("notes")
//       : await db.collection("notes").doc(id);
//     const data = await notes.get();

//     const notesArray: Notes = [];

//     if (data.empty) {
//       res.status(404).send("Nenhuma nota foi encontrada");
//     } else {
//       if (!id) {
//         data.forEach((doc) => {
//           const note = new Note(
//             doc.id,
//             doc.data().title,
//             doc.data().description
//           );

//           notesArray.push(note);
//         });
//         res.send(notesArray);
//       }
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// }

export async function GetNote(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.body;
    if (id) {
      const note = await db.collection("notes").doc(id);
      const data = await note.get();

      res.status(200).send(data.data());
    } else {
      res.status(404).send("Não tenho o id!");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

export async function DeleteNode(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.body;
    if (id) {
      await db.collection("notes").doc(id).delete();
      res.status(200).send("Note deletado com sucesso!");
    } else {
      res.status(404).send("Não tenho o id!");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}
