import "./App.css";
import Table from "./Table/Table";
import Signup from "./Signup/Signup";
import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <Signup users={users} setUsers={setUsers} />
      <Table users={users} />
    </div>
  );
}

export default App;
