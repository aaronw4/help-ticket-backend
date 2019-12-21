const db = require("../config/dbConfig");

module.exports = {
  getTickets
};

function getTickets() {
  return db
    .select("tickets", "students.username")
    .from("tickets")
    .join("students", "students.id", "=", "tickets.studentId");
}
