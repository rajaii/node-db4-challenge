
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {stepByStepInstructions: 'put in oven, bake at 400 f, eat', recipe_id: 3},
        {stepByStepInstructions: 'cut, blend, drink', recipe_id: 2},
        {stepByStepInstructions: 'knead dough, flatten, add sauce, bake', recipe_id: 1},
        
      ]);
    });
};
