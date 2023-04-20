import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import routes from "./routes/routes";
import { config } from "./config";

const app: Express = express();
const port = config.port;

// Routes
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
