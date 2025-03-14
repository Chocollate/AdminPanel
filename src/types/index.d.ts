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
