import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import routes from "./routes/routes";
import { env } from "./env";
import cors from "cors";

const app: Express = express();
const port = env.port;

// Cors
app.use(cors());

// Routes
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
