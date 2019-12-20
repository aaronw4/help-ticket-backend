exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("helpers_tickets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("helpers_tickets").insert([
        { helperId: 1, ticketId: 1 },
        { helperId: 1, ticketId: 2 },
        { ticketId: 3 }
      ]);
    });
};
