const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Tummytummy411!!",
  database: "chours_db",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
