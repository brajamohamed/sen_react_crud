import React from "react";
import { useState } from "react";
const Row = ({ user }) => {
  const [count, setCount] = useState(1);
  console.log("User:", user);
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.password}</td>
    </tr>
  );
};

export default Row;
