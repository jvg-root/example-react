import React, { useEffect, useState } from "react";
import { useUserUseCase } from "../../context/UserUseCaseProvider";
import { User } from "../../core/entities/Entities";
import UserCard from "./UserCard";

const UserList: React.FC = () => {
  const userUseCase = useUserUseCase();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await userUseCase.getAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>

  );
};

export default UserList;