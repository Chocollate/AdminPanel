import { useRouter } from "../hooks/useRouter";
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
      
      <main class="main">
        <aside class="sidebar">
          <h2 class="sidebar__group-name">Manage</h2>
          <ul class="sidebar__groups">
            <li class="sidebar__groups__view-site"><a href="#"><img src="/public/images/home.svg">View site</a></li>
            <li><a href="#"><img src="/public/images/file-plus.svg">Create page</a></li>
            <li><a href="#"><img src="/public/images/pen-tool.svg">Blog articles</a></li>
            <li><a href="#"><img src="/public/images/image.svg">Files</a></li>
            <li><a href="#"><img src="/public/images/users.svg">Users</a></li>
            <li><a href="#"><img src="/public/images/zap.svg">Subscriptions</a></li>
            <li><a href="#"><img src="/public/images/trash-2.svg">Archived pages</a></li>
          </ul>
          <h2 class="sidebar__group-name">Pro features</h2>
          <ul class="sidebar__groups">
            <li><a href=""><img src="/public/images/book-open.svg">Themes</a></li>
            <li><a href=""><img src="/public/images/box.svg">Plugins</a></li>
            <li><a href=""><img src="/public/images/coffee.svg">Upgrade plans</a></li>
          </ul>
        </aside>
        <div class="content">
          yoooo
        </div>
      </main>
    </div>
    `;

  document.querySelector("a")?.addEventListener("click", (event) => {
    event.preventDefault();
  });

  return template.content;
};
