import React, { useEffect, useState } from "react";
import { useUserUseCase } from "../../context/UserUseCaseProvider";
import { User } from "../../core/entities/Entities";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import Paginator from "./Paginator";
import UserCard from "./UserCard";

const UserList: React.FC = () => {
  const userUseCase = useUserUseCase();
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const usersPerPage = 6;
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
    <div className="flex flex-col gap-4 items-center w-full">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {currentUsers.map(user => <UserCard key={user.id} user={user} />)}
      </div>

      <Paginator 
        currentPage={currentPage} 
        totalPages={totalPages} 
        nextPage={nextPage} 
        prevPage={prevPage} 
      />

    </div>
   
  );
};

export default UserList;