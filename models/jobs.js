const orm = require("../config/orm.js");

const task = {
  all: function (cb) {
    orm.all("task", function (res) {
      cb(res);
    });
  },
};

moduale.exports = task;
