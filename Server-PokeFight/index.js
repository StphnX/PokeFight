import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./db/mongodb.js";
import errorHandler from "./middleware/errorHandling.js";
import apiRouter from "./Routes/apiRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

// error handling middleware
app.use(errorHandler);

const port = process.env.PORT || 3000;

db.once("open", () => {
  app.listen(port, () => {
    console.log(`Server running, listening to port ${port}`);
  });
});

db.once("error", (error) => {
  console.log(`Unable to establish database connection: ${error}\nExiting.`);
  process.exit(1);
});