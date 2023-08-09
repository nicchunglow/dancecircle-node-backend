import { ErrorRequestHandler, Request, Response } from "express";
import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";
import UserRouter from "./routes/users.route";
import { apiDirectory } from "./shared.constant";

const app = express();

const appIndex = (_req: Request, res: Response) => {
  res.send(apiDirectory);
};

const frontendUrl: string = process.env.FRONTEND_URL ?? "";
const corsOptions: CorsOptions = {
  origin: [frontendUrl, "http://localhost:3000"],
  allowedHeaders: "content-type",
  credentials: true,
};
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", appIndex);
app.use("/users", UserRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(err.statusCode || 500);
  if (err.statusCode) {
    res.send({ error: err.message });
  } else {
    res.send({ error: "internal server error" });
  }
};

app.use(errorHandler);

export default app;
