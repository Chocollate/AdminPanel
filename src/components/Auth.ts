import { IUser } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useRef } from "../hooks/useRef";
import { useTemplate } from "../hooks/useTemplate";

export const Auth = () => {
  // Создание данных пользователя в local storage

  const template = useTemplate();

  template.innerHTML = /*html */ `
    <div class="panel">
      <h1>Rival<span class="logo__cms">CMS</span></h1>
      <div class="auth">
        <label class="auth__title">
          <img src="images/lock.svg" alt="logo__lock">
          <span>Email address</span>
        </label>
        <input class="auth__email-input" type="email" name="email" required />

        <label class="auth__title">
          <img  src="images/mail.svg" alt="logo__mail">
          <span>Password</span>
        </label>
        <input class="auth__password-input" type="password" name="password" required>

        <div class="auth__forgot-sign">
        <a href="https://vk.com/worldkeeper">Forgot password?</a>
        <button class="auth__sign-in-button" id="sign-in">Sign in</button>
        </div>
        <button class="auth__dont-have-account-button" id="dont-have-account">Don't have & account?</button>
      </div>
    </div>
  `;

  const button = useRef<HTMLButtonElement>("#sign-in", template.content);
  const emailNode = useRef<HTMLInputElement>(
    '[name="email"]',
    template.content
  );
  const passwordNode = useRef<HTMLInputElement>(
    '[name="password"]',
    template.content
  );

  button.onclick = () => {
    const usersBase = useLocalStorage<IUser[]>("users");

    console.log(template.innerHTML);

    console.log("Мыло - ", emailNode);
    console.log("Пусворд - ", passwordNode);
    console.log(template);

    const findedUser = usersBase.find(
      (user, index) =>
        user.email === emailNode.value && user.password === passwordNode.value
    );

    console.log(findedUser);
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
