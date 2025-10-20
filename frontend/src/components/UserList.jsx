import { useEffect, useState } from "react";
import { api } from "../services/api";

export function UserList({ reload }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((res) => setUsers(res.data));
  }, [reload]);

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div>
      <h4>Usuários</h4>
      <ul className="list-group">
        {users.map((u) => (
          <li key={u.id} className="list-group-item d-flex justify-content-between">
            <span>{u.name} - {u.email}</span>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
