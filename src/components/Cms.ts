import { useTemplate } from "../hooks/useTemplate";

export const Cms = () => {
  const template = useTemplate();

  template.innerHTML = /*html*/ `
    <div class="cms">
      <header class="header">
        <div class="header__logo">
          <a href=""> /* доделать */
            <img src="images/group.svg" alt="rival-cms-logo">
            Rival
            <span class="header__logo-cms">
              CMS
            </span>
          </a>
        </div>
        <div class="header__user-activities">
        <button class="pro-plan-button">Pro plan</button>
        <img class="user-avatar" src="images/portrait.jpg" alt="user-avatar">
        </div>
      </header>
      <div class="navigation"></div>
      <div class="content"></div>
    </div>
    `;
  return template.content;
};
