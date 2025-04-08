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

export interface IListProps<T> {
  tag?: keyof HTMLElementTagNameMap = "div";
  className?: string;
  items: T[];
  component: (itemProps: T) => VNode;
}

export interface IListItemProps<T> {
  tag?: keyof HTMLElementTagNameMap = "div";
  className?: string;
  component: (itemProps: T) => VNode;
}

export interface ITableColumn<T> {
  key: string;
  title: string;
  render?: (value: any, item: T) => VNode;
}

export interface ITableProps<T> {
  items: T[];
  columns: ITableColumn<T>[];
  header?: VNode;
  itemComponent?: (item: T) => VNode;
  pageSize?: number;
  className?: string;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
