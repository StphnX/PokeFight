import { Router } from "express";
// import { getAllPokemon, getSinglePokemon } from "../Controllers/Pokemon.js";
import { Pokedex, getSinglePokemon } from "../Controllers/Pokemon.js";
const app = Router();







app.get('/Pokemon', Pokedex)
app.get("/getSinglePokemon/:id", getSinglePokemon);



export default app;