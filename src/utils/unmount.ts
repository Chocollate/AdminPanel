import { VNode } from "../types";
import { useRef } from "../hooks/useRef";

export const unmount = (node: string) => {
  const findedNode = useRef<Element>(node);
  findedNode.remove();
};
