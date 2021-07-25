import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", router);

app.listen(8080, () => console.log("Server is running"));
