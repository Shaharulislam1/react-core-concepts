import React, { use } from "react";
import User from "./User";

const Users = ({fetchUser}) => {
  const users = use(fetchUser);
   const counterStyle = {
    border: "5px solid yellow",
    borderRadius: "10px",
    margin: "10px",
    padding: "5px",
  };
  return (
    <div style={counterStyle}>
      <h3>Users: {users.length} </h3>
      {
        users.map(user => <User key={user.id} user={user}></User>)
      }
    </div>
  );
};

export default Users;
