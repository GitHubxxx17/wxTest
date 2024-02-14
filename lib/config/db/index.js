import mysql from "mysql";
const db = mysql.createPool({
  host: "10.25.104.72:3306",
  user: "root",
  password: "@123456a",
  database: "mxfilm",
  timezone: "08:00",
});
export default db;
