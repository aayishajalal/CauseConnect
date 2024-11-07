import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./db/ConnectToMongo.js";
import userRouter from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
import eventRouter from "./routes/EventRouter.js";
import AppError from "./utils/appError.js";
import { globalErrorHandler } from "./controllers/errorController.js";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRouter);
app.use("/api/events", eventRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`Server is running on port ${PORT}`);
});
