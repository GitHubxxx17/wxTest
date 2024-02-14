import mysql from "mysql";
const db = mysql.createPool({
  host: "10.25.104.72",
  user: "root",
  password: "@123456a",
  database: "mxfilm",
  timezone: "08:00",
  port: "3306",
});
export default db;
