const db = require("../../config/dbConfig");

module.exports = {
  getTickets,
  getTicket,
  assignTicket,
  updateOpenStatus,
  updateResolvedStatus,
  unassignTicket,
  addTicket,
  usersTicketsAdd
};

function getTickets() {
  return db
    .select("tickets.*", "users.username", "categories.category")
    .from("users_tickets")
    .join("users", "users.id", "=", "tickets.userId")
    .join("tickets", "tickets.id", "=", "users_tickets.ticketId")
    .join("categories", "categories.id", "=", "tickets.categoryId");
}

function getTicket(ticketId) {
  return db("tickets").where("id", ticketId);
}

function assignTicket(userId, ticketId) {
  return db("users_tickets")
    .where("ticketId", ticketId)
    .update("userId", userId);
}

function updateOpenStatus(ticketId, ticketStatus) {
  return db("tickets")
    .where("id", ticketId)
    .update("openStatus", !ticketStatus);
}

function updateResolvedStatus(ticketId, resolvedStatus) {
  return db("tickets")
    .where("id", ticketId)
    .update("resolved", !resolvedStatus);
}

function unassignTicket(userId, ticketId) {
  return db("users_tickets")
    .where("ticketId", ticketId)
    .update("userId", userId);
}

function addTicket(ticket) {
  return db("tickets").insert(ticket, ["id"]);
}

function usersTicketsAdd(ticketId) {
  console.log("TICKET_ID: ", ticketId);
  console.log(typeof ticketId);
  return db("users_tickets").insert(ticketId);
}
