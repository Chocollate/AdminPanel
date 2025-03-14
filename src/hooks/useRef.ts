import { VNode } from "../types";

export const useRef = <T = VNode>(selector: string, container?: VNode): T => {
  return container
    ? (container.querySelector(selector) as T)
    : (document.querySelector(selector) as T);
};
