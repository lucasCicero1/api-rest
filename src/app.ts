import * as express from "express";
import * as cors from "cors";
import * as logger from "morgan";
import { connectServerOnDb } from "./config/db";
import { userRouter } from "./routes/userRoute";
import { launchRouter } from "./routes/launchRoute";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use('/user', userRouter);
app.use('/launch', launchRouter);

connectServerOnDb();