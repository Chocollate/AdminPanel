import { List, ListItem } from "./List";

import { ILink } from "../types";
import { Link } from "./Link";
import { Table } from "./Table";
import { render } from "../utils/render";
import { useRef } from "../hooks/useRef";
import { useRouter } from "../hooks/useRouter";
import { useTemplate } from "../hooks/useTemplate";

export const Cms = () => {
  const template = useTemplate();

  const mainItems: ILink[] = [
    {
      href: "#",
      text: "View site",
      icon: "home",
    },
    {
      href: "#",
      text: "Create Page",
      icon: "file-plus",
    },
    {
      href: "#",
      text: "Blog articles",
      icon: "pen-tool",
    },
    {
      href: "#",
      text: "Files",
      icon: "image",
    },
    {
      href: "#",
      text: "Users",
      icon: "users",
    },
    {
      href: "#",
      text: "Subscriptions",
      icon: "zap",
    },
    {
      href: "#",
      text: "Archived pages",
      icon: "trash-2",
    },
  ];

  const subItems: ILink[] = [
    {
      href: "",
      text: "Themes",
      icon: "book-open",
    },
    {
      href: "",
      text: "Plugins",
      icon: "box",
    },
    {
      href: "",
      text: "Upgrade plans",
      icon: "coffee",
    },
  ];

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
          <ul class="sidebar__groups" id="main-ul">
            
          </ul>
          <h2 class="sidebar__group-name">Pro features</h2>
          <ul class="sidebar__groups" id="sub-ul">
            <!-- <li><a href=""><img src="/images/book-open.svg">Themes</a></li>
            <li><a href=""><img src="/images/box.svg">Plugins</a></li>
            <li><a href=""><img src="/images/coffee.svg">Upgrade plans</a></li> -->
          </ul>
        </aside>
        <div class="content" id="content">
          
        </div>
      </main>
    </div>
    `;

  const mainUl = useRef("#main-ul", template.content);
  const subUl = useRef("#sub-ul", template.content);
  const content = useRef("#content", template.content);

  render(
    mainUl,
    mainItems.map((item) =>
      ListItem({
        tag: "li",
        component: () => Link(item),
      })
    )
  );

  render(
    subUl,
    subItems.map((item) => Link(item))
  );

  render(
    content,
    Table({
      columns: [
        {
          key: "href",
          title: "meme",
          render: (value) => {
            const template = useTemplate();
            template.innerHTML = "aksjdhaskdhjasd";
            return template.content;
          },
        },
      ],
      items: mainItems,
      pageSize: 1,
    })
  );

  return template.content;
};
