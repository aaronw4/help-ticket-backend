const db = require("../config/dbConfig");

module.exports = {
  addUser,
  usersRolesAdd,
  getUser,
  getRoles,
  getRole,
  editRole
};

function addUser(user) {
  return db("users").insert(user, ["id"]);
}

function usersRolesAdd(userId) {
  console.log("USER_ID: ", userId);
  console.log(typeof userId);
  return db("users_roles").insert(userId);
}

function getUser(username) {
  return db("users").where("username", username);
}

function getRoles() {
  return db("roles");
}

function getRole(roleId) {
  return db
    .select("role")
    .from("roles")
    .where("id", roleId);
}

function editRole(userId, roleId) {
  return db("users_roles")
    .where("userId", userId)
    .update("roleId", roleId);
}
