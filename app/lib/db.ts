import { saltAndHashPassword } from "./password";

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
}

const testUserPasswordHash = await saltAndHashPassword("password123");

// 開発用の固定ユーザー情報
const users: User[] = [
  {
    id: "1",
    email: "test@example.com",
    passwordHash: testUserPasswordHash,
    name: "Test User",
  },
];

export async function getUserFromDb(email: string, pwHash: string): Promise<User | null> {
  const found = users.find((user) => user.email === email && user.passwordHash === pwHash);
  return found || null;
}