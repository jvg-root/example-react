import React from "react";
import UserList from "../components/UsersList";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-blue-600 text-center">User Dashboard</h1>
        <UserList />
      </div>
    </div>

  );
};

export default UsersPage;
