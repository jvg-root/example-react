import React from "react";
import UserList from "../components/UsersList";

const UsersPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        Users List
      </h1>
      <UserList />
    </div>
  );
};

export default UsersPage;
