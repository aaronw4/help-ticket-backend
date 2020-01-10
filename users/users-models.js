const db = require("../config/dbConfig");

module.exports = {
  addUser,
  usersRolesAdd,
  getUser,
  getRoles,
  getRole,
  addRole,
  removeRole,
  getUsers,
  getUsersRoles
};

function addUser(user) {
  return db("users").insert(user);
}

function usersRolesAdd(userId) {
  console.log("USERID: ", userId);
  console.log(typeof userId);
  return db("users_roles").insert({ userId });
}

function getUser(username) {
  console.log("USER: ", username);
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

function addRole(userId, roleId) {
  return db("users_roles").insert({ userId: userId, roleId: roleId });
}

function removeRole(userId, roleId) {
  return db("users_roles")
    .where({ userId: userId, roleId: roleId })
    .del();
}

function getUsers() {
  return db("users");
}

function getUsersRoles() {
  return db("users_roles");
}
