import { useTemplate } from "../hooks/useTemplate";

export const Cms = () => {
  const template = useTemplate();

  template.innerHTML = /*html*/ `
    <div class="cms">
      <header class="header">
        <a class="header__logo" href="#">
          <img class="header__image" src="images/group.svg" alt="rival-cms-logo">
          Rival
          <span class="header__cms">
            CMS
          </span>
        </a>
        <div class="header__user-activities">
          <button class="header__plan-button" type="button">Pro plan</button>
          <div class="header__avatar">
            <img class="header__avatar-image" src="images/portrait.jpg" alt="user-avatar">
          </div>
        </div>
      </header>
      <div class="navigation">
        
      </div>
      <div class="content"></div>
    </div>
    `;
  return template.content;
};
