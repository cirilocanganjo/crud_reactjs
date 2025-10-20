import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // tua senha
  database: "crud_react",
});

db.connect(err => {
  if (err) throw err;
  console.log("Conectado ao MySQL!");
});