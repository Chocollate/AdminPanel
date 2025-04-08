import { IListItemProps, IListProps } from "../types";

import { render } from "../utils/render";
import { useTemplate } from "../hooks/useTemplate";

export const List = <T>(props?: IListProps<T>) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <${props?.tag} class="${props?.className}">

    </${props?.tag}>
  `;

  const container = template.content.querySelector(props?.tag || "div")!;

  render(
    container,
    props?.items.map((item) =>
      ListItem({
        component: props.component,
      })
    )
  );

  return template.content;
};

export const ListItem = <T>(props: IListItemProps<T>) => {
  const template = useTemplate();

  template.innerHTML = `<${props.tag}>
    
  </${props.tag}>`;

  const container = template.content.querySelector(props?.tag || "div")!;

  render(container, props.component(props as T));

  return template.content;
};
//doc query selector LIшек ДОДЕЛАТЬ
