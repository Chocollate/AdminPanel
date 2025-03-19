import { Cms } from "./Cms";
import { IUser } from "../types";
import { checkUser } from "../utils/checkUser";
import { render } from "../utils/render";
import { unmount } from "../utils/unmount";
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
        <input class="auth__email-input" type="email" name="email" value="ggjuke@gmail.com" required />

        <label class="auth__title">
          <img  src="images/mail.svg" alt="logo__mail">
          <span>Password</span>
        </label>
        <input class="auth__password-input" type="password" name="password" value="1234" required>

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

    // console.log(template.innerHTML);

    // console.log("Мыло - ", emailNode);
    // console.log("Пусворд - ", passwordNode);
    // console.log(template);

    const findedUser = checkUser(emailNode.value, passwordNode.value);

    if (findedUser) {
      const appNode = useRef("#app");
      unmount(".panel");
      render(appNode, Cms());
    } else {
      console.log("Пользователь не найден");
    }

    // console.log(findedUser);
  };

  return template.content;
};

/*
Проверка:
1) обозначения классов
2) верно-ли обозначен id у button
3) задание типов переменных, при их создании

 */
