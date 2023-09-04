import { Router } from "express";
import pokemonRouter from "./PokemonRouter.js";
import initialLoad from "./initialLoad.js";
const apiRouter = Router();

// ROUTE pokemon
apiRouter.use("/pokemon", pokemonRouter);

// TMP ROUTE initial_load
apiRouter.use("/initial_load", initialLoad);

export default apiRouter;