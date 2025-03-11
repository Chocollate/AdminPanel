export interface IComponentProps {
  children?: VNode | VNode[];
  tag?: keyof HTMLElementTagNameMap = "div";
}

export type VNode = HTMLElement | DocumentFragment;
