import React from "react";

const Row = ({ user }) => {
  console.log("User:", user);
  return (
    <tr>
      <th scope="row">{1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.password}</td>
    </tr>
  );
};

export default Row;
