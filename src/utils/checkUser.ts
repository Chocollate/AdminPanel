import { IUser } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const checkUser = (email: string, password: string) => {
  const usersBase = useLocalStorage<IUser[]>("users");

  return usersBase.find(
    (user) => user.email === email && user.password === password
  );
};
