exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users_roles").insert([{ userId: 1 }, { userId: 2 }]);
    });
};
