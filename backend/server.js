import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// CREATE
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Usuário criado com sucesso!");
  });
});

// READ
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  db.query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Usuário atualizado com sucesso!");
  });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Usuário removido!");
  });
});

app.listen(5000, () => console.log("🚀 Servidor backend rodando em http://localhost:5000"));
