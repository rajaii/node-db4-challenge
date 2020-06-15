const express = require('express');

const router = express.Router();
const recipeDb = require('../data/dataAccessHelpers.js');

router.get('/', async (req, res) => {
    try {
        const recipe = await recipeDb.getRecipes();
        res.status(200).json(recipe)
    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.get('/:id/shoppinglist', async (req, res) => {
    try {
        const { id } = req.params;
        const shoppingList = await recipeDb.getShoppingList(id);
        console.log(shoppingList)
        res.status(200).json(shoppingList);
    } catch(err) {
        console.log(err)
        res.status(500).json(err.message);
    }   
})

router.get('/:id/instructions', async (req, res) => {
    try {
        const { id } = req.params;
        const instructions = await recipeDb.getInstructions(id);
        res.status(200).json(instructions);
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;