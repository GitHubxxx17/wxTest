import mysql from "mysql";
const db = mysql.createPool({
  host: "sh-cynosdbmysql-grp-13is1y6o.sql.tencentcdb.com",
  user: "root",
  password: "@123456a",
  database: "mxfilm",
  timezone: "08:00",
  port: "24506",
});
export default db;
