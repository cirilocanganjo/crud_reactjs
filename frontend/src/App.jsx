import { useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";

function App() {
  const [reload, setReload] = useState(false);
  return (
    <div className="container mt-4">
      <h2>CRUD React + MySQL</h2>
      <UserForm onSave={() => setReload(!reload)} />
      <UserList reload={reload} />
    </div>
  );
}

export default App;
