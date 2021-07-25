import { Router } from "express";

import { CreateNote, GetNote, DeleteNode } from "./controller/notes.controller";
const router = Router();

router.post("/note", CreateNote);
router.get("/note", GetNote);
router.delete("/note", DeleteNode);

export { router };
