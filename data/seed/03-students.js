exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        {
          username: "user1",
          password: "pass"
        },
        {
          username: "user2",
          password: "pass"
        },
        {
          username: "user3",
          password: "pass"
        }
      ]);
    });
};
