const db = require('./db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
   return db('recipes');
}

function getShoppingList(id) {
    return db('recipes_ingredients')
        .join('ingredients', 'recipes_ingredients.ingredients_id', '=', 'ingredients.id')
        .join('recipes', 'recipes_ingredients.recipe_id', '=', 'recipes.id')
        .select('recipe', 'ingredient', 'quantity')
        .where('recipes.id', id);
}

function getInstructions(recipe_id) {
    return db('recipes')
        .join('instructions', 'instructions.recipe_id', '=', 'recipes.id')
        .select('recipe','stepByStepInstructions')
        .where('recipes.id', recipe_id)
}

