import { Router } from "express";
import {
  getAllPokemon,
  getSinglePokemon,
  getSinglePokemonInfo,
} from "../Controllers/pokemonController.js";

const pokemonRouter = Router();

pokemonRouter.route("/").get(getAllPokemon);
pokemonRouter.route("/:id").get(getSinglePokemon);
pokemonRouter.route("/:id/:prop").get(getSinglePokemonInfo);

export default pokemonRouter;