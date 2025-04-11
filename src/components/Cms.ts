import { List, ListItem } from "./List";

import { Button } from "./Button";
import { ILink } from "../types";
import { Link } from "./Link";
import { Table } from "./Table";
import { render } from "../utils/render";
import { renderBlogArticles } from "../utils/renderBlogArticles";
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

  const articlesData = [
    {
      title: "Design: A Survival Guide for Beginners",
      posted: "Posted 3 days ago",
      status: "Published",
      statsNum: 120,
    },
    {
      title: "Design: A Survival Guide for Beginners",
      posted: "Posted 3 days ago",
      status: "Draft",
      statsNum: 0,
    },
    {
      title: "Design: A Survival Guide for Beginners",
      posted: "Posted 3 days ago",
      status: "Scheduled",
      statsNum: 0,
    },
    {
      title: "Design: A Survival Guide for Beginners",
      posted: "Posted 3 days ago",
      status: "Published",
      statsNum: 120,
    },
    {
      title: "Design: A Survival Guide for Beginners",
      posted: "Posted 3 days ago",
      status: "Published",
      statsNum: 120,
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
          <table>
            <thead>
              <tr>
                  <th scope="column">Title</th>
                  <th scope="column">Status</th>
                  <th scope="column">Stats</th>
                  <th scope="column"><div class="table__btn"><button><img src='/images/pen-tool-btn.svg'>Add new</button></div></th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
          <div class="footer-content">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
          </div>
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
    subItems.map((item) =>
      ListItem({
        tag: "li",
        component: () => Link(item),
      })
    )
  );

  // Рендеринг статей
  renderBlogArticles(articlesData, template.content);

  /* 
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
        {
          key: "title",
          title: "Title",
        },
        {
          key: "status",
          title: "Status",
        },
        {
          key: "stats",
          title: "Stats",
        },
        {
          key: "button",
          title: "Btn",
          render: (value) => {
            // const template = useTemplate();
            const addBtn = Button("<img src='/images/pen-tool.svg'>Add new");
            // template.appendChild(addBtn);
            // return template.;
            return addBtn;
          },
        },
      ],
      items: mainItems,
      pageSize: 1,
    })
  );
 */
  return template.content;
};
