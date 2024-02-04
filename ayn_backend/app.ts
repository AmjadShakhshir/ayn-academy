import express from "express";
import passport from "passport";
import cors from "cors";

import { loggingMiddleware } from "./middlewares/logging";
import { apiErrorHandler } from "./middlewares/apiErrorHandler";
import { routeNotFound } from "./middlewares/routeNotFound";
import usersRouter from "./routes/userRouter";
import coursesRouter from "./routes/courseRouter";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

app.use("/users", loggingMiddleware, usersRouter);
app.use("/courses", loggingMiddleware, coursesRouter);

app.use(apiErrorHandler);
app.use(routeNotFound);

export default app;
