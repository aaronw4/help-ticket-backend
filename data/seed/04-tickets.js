exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tickets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tickets").insert([
        {
          title: "A",
          description: "A",
          attempted: "A",
          openStatus: false,
          resolved: true,
          studentId: 1
        },
        {
          title: "B",
          description: "B",
          attempted: "B",
          openStatus: false,
          resolved: false,
          studentId: 2
        },
        {
          title: "C",
          description: "C",
          attempted: "C",
          openStatus: true,
          resolved: false,
          studentId: 3
        }
      ]);
    });
};
