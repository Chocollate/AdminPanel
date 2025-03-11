import { Auth } from "./components/Auth";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Table } from "./components/ExampleTable";
import { render } from "./utils/render";

export const App = () => {
  const body = document.querySelector("body")!;

  render(
    body,
    Container({
      tag: "div",
      children: [Button("kek"), Button("abaasdasd")],
    })
  );
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
