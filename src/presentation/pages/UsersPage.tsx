import React from "react";
import UserList from "../components/UsersList";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="w-full max-w-3xl bg-blue-600 text-white py-4 px-6 rounded-t-lg shadow-md">
        <h1 className="text-3xl font-bold tracking-wide">User Dashboard</h1>
      </header>

      {/* Content Box */}
      <div className="bg-white shadow-lg rounded-b-lg p-6 w-full max-w-3xl">
        <UserList />
      </div>
    </div>


  );
};

export default UsersPage;
