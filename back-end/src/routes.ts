import { Router } from "express";

import {
  createNote,
  getNote,
  getNotes,
  deleteNode,
} from "./controller/notes.controller";
const router = Router();

router.post("/note", createNote);
router.get("/note", getNote);
router.get("/notes", getNotes);
router.delete("/note", deleteNode);

export { router };
