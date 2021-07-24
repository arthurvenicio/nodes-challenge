import { Router } from "express";

import { CreateNote } from "./controller/notes.controller";
const router = Router();

router.post("/createnote", CreateNote);

export { router };
