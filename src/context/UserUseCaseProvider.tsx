import React, { createContext, useContext } from "react";
import { IUserUseCase } from "../core/adapters/in/IUserUseCase";
import { UserUseCase } from "../core/usecases/UserUseCase";
import { UserRepository } from "../data/repository/UserRepository";

const userUseCase: IUserUseCase = new UserUseCase(new UserRepository());

const UserUseCaseContext = createContext<IUserUseCase | null>(null);

export const UserUseCaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <UserUseCaseContext.Provider value={userUseCase}>{children}</UserUseCaseContext.Provider>;
};

export const useUserUseCase = () => {
  const context = useContext(UserUseCaseContext);
  if (!context) throw new Error("useUserUseCase must be used within UserUseCaseProvider");
  return context;
};