import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// cors (cross origin resource sharing)
// when we need configure or set middlewere then we use cors.
const app = express();

// Enable CORS with specific opt
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// to configure form by json on express we had to set "express.json"
app.use(express.json({ limit: "16kb" }));

// to configure url on express we had to set "express.urlencoded" for urlencoded & extended can have objects basically obj inside in another obj.
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to store files (image, pdf, fevicon etc) we had to set express.static
app.use(express.static("public"));

// to access cookies from user browser by provider server we use "cookieParser"
app.use(cookieParser());

//routes

import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users
export { app };
