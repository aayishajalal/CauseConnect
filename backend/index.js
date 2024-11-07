
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./db/ConnectToMongo.js";
import userRouter from "./routes/userRouter.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/users",userRouter);

app.listen(PORT, () => {
    connectToMongo();   
    console.log(`Server is running on port ${PORT}`);
});