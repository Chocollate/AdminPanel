// Интерфейсы

interface IUser {
  id: string;
  name?: string;
}

const users: IUser[] = [
  {
    id: "1",
    name: "ke",
  },
];

// Типы
type UserRole = "user" | "admin" | "lox";

// Списки
enum ResponseTypes {
  SUCCESS = "success",
  ERROR = "404",
  WAITING = "pending",
}

type UserKeys = keyof IUser;

const userKey: UserKeys = "id";

type UserString = keyof typeof userKey;
