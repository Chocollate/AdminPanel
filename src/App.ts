import { Auth } from "./components/Auth";
import { Button } from "./components/Button";
import { Cms } from "./components/Cms";
import { Container } from "./components/Container";
import { IUser } from "./types";
import { Table } from "./components/ExampleTable";
import { render } from "./utils/render";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useRef } from "./hooks/useRef";

export const App = () => {
  const appNode = useRef("#app")!;

  useLocalStorage<IUser[]>("users", [
    { id: 1, email: "ggjuke@gmail.com", password: "1234" },
    { id: 2, email: "OrkTupoy@gmail.com", password: "1111" },
  ]);

  render(appNode, Auth());
  // render(appNode, Cms());

  // body.append(
  //   Container({
  //     children: Button("Прикол"),
  //   })
  // );
  // body.append(Button("t"), Button("2"));
  /*
  const body = document.querySelector("body")!;

  body.append(Button("hello niggu"));

  interface IUser {
    id: string;
    name?: string;
    test: 1;
  }

  const users: IUser[] = [
    {
      id: "1",
      test: 1,
    },
  ];

  const test = Table(users);
  */
};
