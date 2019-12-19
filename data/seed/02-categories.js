exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { category: "javascript" },
        { category: "knex" },
        { category: "css" }
      ]);
    });
};
