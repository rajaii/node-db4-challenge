const express = require('express');
const server = express();

const recipeBookRouter = require('./recipeBook/recipeBookRouter.js');

server.use(express.json());
server.use('/api/recipebook', recipeBookRouter);

server.get('/', (req, res) => {
    res.status(200).send('<h1>Hi from RecipeBookHackers.javascript</h1>')
})

module.exports = server;