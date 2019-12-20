const db = require("../config/dbConfig");

module.exports = {
  getHelpers
};

function getHelpers() {
  return db("helpers");
}
