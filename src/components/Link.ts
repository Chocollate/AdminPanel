import { ILink } from "../types";
import { useRef } from "../hooks/useRef";
import { useTemplate } from "../hooks/useTemplate";

export const Link = (props: ILink) => {
  const template = useTemplate();

  template.innerHTML = /*html*/ `
      <li>
        <a href="${props.href}">
          <img src="/images/${props.icon}.svg" alt="${props.icon}">
          ${props.text}
        </a>
      </li>
    `;

  const myLink = useRef<HTMLLinkElement>("a", template.content);
  myLink.onclick = (event) => {
    event.preventDefault();
  };

  return template.content;
};
