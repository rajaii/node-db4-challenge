
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'chocolate', quantity: 2.22},
        {ingredient: 'ice cream', quantity: 3.22},
        {ingredient: 'flour', quantity: 10.22},
        {ingredient: 'cheese', quantity: 5.32},
        {ingredient: 'sauce', quantity: 6.22},
        {ingredient: 'chocolate chips', quantity: 10.22},
      ]);
    });
};
