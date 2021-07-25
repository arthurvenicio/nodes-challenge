import { Router } from "express";

import { CreateNote, GetNote } from "./controller/notes.controller";
const router = Router();

router.post("/createnote", CreateNote);
router.get("/getnote", GetNote);

export { router };
