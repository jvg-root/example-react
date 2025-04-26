import React, { useEffect, useState } from "react";
import { useUserUseCase } from "../../context/UserUseCaseProvider";
import { User } from "../../core/entities/Entities";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import UserCard from "./UserCard";

const UserList: React.FC = () => {
  const userUseCase = useUserUseCase();
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await userUseCase.getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  
  }, []);

  if (loading) return <Loader></Loader>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;