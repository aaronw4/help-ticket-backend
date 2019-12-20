const db = require("../config/dbConfig");

module.exports = {
  getHelpers,
  addHelper,
  getHelper
};

function getHelpers() {
  return db("helpers");
}

function addHelper(helper) {
  return db("helpers").insert(helper);
}

function getHelper(helperName) {
  return db("helpers").where("username", helperName);
}
