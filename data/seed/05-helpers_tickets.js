exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("helpers_tickets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("helpers_tickets").insert([
        { helpId: 1, ticketId: 1 },
        { helpId: 1, ticketId: 2 },
        { ticketId: 3 }
      ]);
    });
};
