import dotenv from "dotenv";
import express from "express";
dotenv.config()
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
import Router from './Routes/Router.js';



app.use(Router);




app.listen(port, () =>
    console.log(`http://localhost:${port}/`)
);