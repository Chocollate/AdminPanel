import { IListProps } from "../types";
import { render } from "../utils/render";

export const List = <T>(props?: IListProps<T>) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <${props?.tag} class="${props?.className}">

    </${props?.tag}>
  `;

  const container = template.content.querySelector(props?.tag || "div")!;

  render(
    container,
    props?.items.map((item) => props.component(item))
  );

  return template.content;
};

//doc query selector LIшек ДОДЕЛАТЬ
