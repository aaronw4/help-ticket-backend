const db = require("../config/dbConfig");

module.exports = {
  getHelpers,
  addHelper
};

function getHelpers() {
  return db("helpers");
}

function addHelper(helper) {
  return db("helpers").insert(helper);
}
