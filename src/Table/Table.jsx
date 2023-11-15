import React from "react";
import Row from "../Row/Row";
const Table = ({ users }) => {
  console.log("Users in Table:", users);
  return (
    <div className="container">
      <h4 className="mt-5">Employee Details</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">E id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return <Row key={user[i]} user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
