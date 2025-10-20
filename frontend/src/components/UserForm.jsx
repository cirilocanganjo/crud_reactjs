import { useState } from "react";
import { api } from "../services/api";

export function UserForm({ onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/users", { name, email });
    setName("");
    setEmail("");
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded mb-3">
      <h4>Cadastrar Usuário</h4>
      <input
        type="text"
        placeholder="Nome"
        className="form-control mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        className="form-control mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary w-100">Salvar</button>
    </form>
  );
}
