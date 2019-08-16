
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: 'pizza'},
        {recipe: 'chocolate shake'},
        {recipe: 'cookies'}
       
      ]);
    });
};
