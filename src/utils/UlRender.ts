import { ILink } from "../types";

export const UlRender = (props: ILink | ILink[], className: string) => {
  const ul = document.createElement("ul");
  ul.className = className;
};
