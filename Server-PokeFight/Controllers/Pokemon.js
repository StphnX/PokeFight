import path from 'path';
import fs from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


// GET /Pokedex

export const Pokedex = (req, res) => {
    //GET METHOD
    const filePath = path.join(__dirname, '../Pokedex.json');

    const rawData = fs.readFileSync(filePath, 'utf8');
    const existingData = JSON.parse(rawData);
    res.send(rawData);
}





//GET /getSinglePokemon/:id

export const getSinglePokemon = (req, res) => {

    Pokemon.find({ id: req.params.id })
        .then(results => {
            res.status(200).send(results)
        })
        .catch(err => {
            console.log(err);
        })
};

export default { Pokedex, getSinglePokemon };