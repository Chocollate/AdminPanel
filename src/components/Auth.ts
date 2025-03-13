import { IUser } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Auth = () => {
  // Создание данных пользователя в local storage

  const template = document.createElement("template");

  template.innerHTML = /*html */ `
    <h1>Rival<span class="logo__cms">CMS</span></h1>;
    <div class="auth">
      <img src="images/lock.svg" alt="logo__lock">
      <span class="auth__email-address">Email address</span>
      <input class="auth__email-input" type="email" id="email" name="email" required />

      <img src="images/mail.svg" alt="logo__mail">
      <span class="auth__password">Password</span>
      <input class="auth__password-input" type="password" id="pass" name="password" required>

      <a href="https://vk.com/worldkeeper">Forgot password?</a>
      <button class="auth__sign-in-button" id="sign-in">Sign in</button>
    </div>
  `;

  template.content.getElementById("sign-in")!.onclick = () => {
    const usersBase = useLocalStorage<IUser[]>("users");

    const emailNode = document.getElementById("email") as HTMLInputElement;
    const passwordNode = document.getElementById("pass") as HTMLInputElement;

    console.log(usersBase);

    usersBase.find((user, index) => {
      user. //-------------------------------------- Доделать поиск юзверя по email/pass
    })
  };
  // const header = document.createElement("h1");

  // header.innerHTML = "RivalCMS";

  // return header;
  // return <h1>RivalCMS</h1>
  return template.content;
};

/*
Проверка:
1) обозначения классов
2) верно-ли обозначен id у button
3) задание типов переменных, при их создании

 */
