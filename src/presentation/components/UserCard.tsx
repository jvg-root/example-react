import React from "react";
import { User } from "../../core/entities/Entities";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-700">{user.name}</h2>
      <p className="text-sm text-gray-500">Username: {user.username}</p>
      <p className="text-sm text-gray-500">Email: {user.email}</p>
      <p className="text-sm text-gray-500">Phone: {user.phone || "Not available"}</p>
      <p className="text-sm text-gray-500">Company: {user.company?.name}</p>
    </div>

  );
};

export default UserCard;