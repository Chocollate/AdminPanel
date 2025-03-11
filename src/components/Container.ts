import { IComponentProps } from "../types";
import { render } from "../utils/render";

export const Container = (props?: IComponentProps) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <${props?.tag} class="container">
    </${props?.tag}>
  `;

  const container = template.content.querySelector(props?.tag || "div")!;

  render(container, props?.children);

  return template.content;
};
