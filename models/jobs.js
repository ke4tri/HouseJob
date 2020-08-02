const orm = require("../config/orm.js");

const task = {
  all: function (cb) {
    orm.all("tasks", function (res) {
      cb(res);
    });
  },
};

module.exports = task;
