exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tickets")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tickets").insert([
        { helpId: 1, studentId: 1, openStatus: true, resolved: false },
        { helpId: 1, studentId: 2, openStatus: false, resolved: false },
        { helpId: 1, studentId: 3, openStatus: true, resolved: true }
      ]);
    });
};
