export type User = {
  id: string;
  email: string;
  password: string;
};

export type Board = {
  id: string;
  name: string;
  userId: string;
  tasks: string[];
};

export const users: User[] = [];
export const boards: Board[] = [];

