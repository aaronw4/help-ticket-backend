exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        {
          username: "user1",
          password: "pass",
          title: "A",
          description: "A",
          attempted: "A",
          categoryId: 1
        },
        {
          username: "user2",
          password: "pass",
          title: "B",
          description: "B",
          attempted: "B",
          categoryId: 2
        },
        {
          username: "user3",
          password: "pass",
          title: "C",
          description: "C",
          attempted: "C",
          categoryId: 3
        }
      ]);
    });
};
