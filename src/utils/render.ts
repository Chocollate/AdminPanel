import { VNode } from "../types";

export const render = (node: HTMLElement, children?: VNode | VNode[]) => {
  if (!children) return;

  if (Array.isArray(children)) {
    node.append(...children);
  } else node.append(children);
};
