// src/controllers/userController.ts
import { Request, Response } from "express";
import {
  User,
  CreateUserDto,
  UpdateUserDto,
} from "../interfaces/userInterface";

// Simulação de um banco de dados
let users: User[] = [
  { id: 1, name: "João", email: "joao@email.com" },
  { id: 2, name: "Maria", email: "maria@email.com" },
];

// Obter todos os usuários
export const getUsers = (req: Request, res: Response): void => {
  res.json(users);
};

// Obter um usuário pelo ID
export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
};

// Criar um novo usuário
export const createUser = (req: Request, res: Response): void => {
  const { name, email } = req.body as CreateUserDto;

  if (!name || !email) {
    res.status(400).json({ message: "Nome e email são obrigatórios" });
    return;
  }

  const newId =
    users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  const newUser: User = { id: newId, name, email };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Atualizar um usuário
export const updateUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body as UpdateUserDto;
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users[index] = {
      ...users[index],
      name: name || users[index].name,
      email: email || users[index].email,
    };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
};

// Deletar um usuário
export const deleteUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "Usuário removido com sucesso" });
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
};
