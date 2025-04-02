export interface IComponentProps {
  children?: VNode | VNode[];
  tag?: keyof HTMLElementTagNameMap = "div";
}

export type VNode = HTMLElement | DocumentFragment | Element;

export interface IUser {
  id: number;
  email: string;
  password: string;
}

export interface ILink {
  href: string;
  text?: string;
  icon?: string;
}
