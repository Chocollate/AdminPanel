// types.ts - добавляем новые типы
export interface ITableColumn<T> {
    key: string;
    title: string;
    render?: (value: any, item: T) => VNode | string;
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
  
------------------------------------------------------------
    
    // Table.ts
import { ITableProps, ITableColumn, VNode } from "../types";
import { render } from "../utils/render";
import { useTemplate } from "../hooks/useTemplate";
import { Pagination } from "./Pagination";

export const Table = <T>(props: ITableProps<T>) => {
  const template = useTemplate();
  const pageSize = props.pageSize || 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(props.items.length / pageSize);
  const paginatedItems = props.items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  template.innerHTML = `
    <div class="table-container ${props.className || ''}">
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  `;

  const table = template.content.querySelector("table")!;
  const thead = template.content.querySelector("thead")!;
  const tbody = template.content.querySelector("tbody")!;

  // Render header
  if (props.header) {
    render(thead, props.header);
  } else {
    const headerRow = document.createElement("tr");
    props.columns.forEach(column => {
      const th = document.createElement("th");
      th.textContent = column.title;
      headerRow.appendChild(th);
    });
    render(thead, headerRow);
  }

  // Render rows
  if (props.itemComponent) {
    render(tbody, paginatedItems.map(item => props.itemComponent!(item)));
  } else {
    paginatedItems.forEach(item => {
      const row = document.createElement("tr");
      props.columns.forEach(column => {
        const td = document.createElement("td");
        const value = (item as any)[column.key];
        
        if (column.render) {
          const rendered = column.render(value, item);
          render(td, typeof rendered === 'string' ? document.createTextNode(rendered) : rendered);
        } else {
          td.textContent = value;
        }
        
        row.appendChild(td);
      });
      render(tbody, row);
    });
  }

  // Add pagination if needed
  if (props.items.length > pageSize) {
    const pagination = Pagination({
      currentPage,
      totalPages,
      onPageChange: (page) => {
        setCurrentPage(page);
      }
    });
    
    render(template.content.querySelector(".table-container")!, pagination);
  }

  return template.content;
};

--------------------------------------------------
    
    // Pagination.ts
import { IPaginationProps, VNode } from "../types";
import { useTemplate } from "../hooks/useTemplate";
import { render } from "../utils/render";

export const Pagination = (props: IPaginationProps): VNode => {
  const template = useTemplate();
  
  template.innerHTML = `
    <div class="pagination">
      <button class="pagination-prev">Previous</button>
      <div class="pagination-pages"></div>
      <button class="pagination-next">Next</button>
    </div>
  `;

  const pagesContainer = template.content.querySelector(".pagination-pages")!;
  
  // Generate page buttons
  const pageButtons: VNode[] = [];
  for (let i = 1; i <= props.totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i.toString();
    pageButton.className = i === props.currentPage ? "active" : "";
    pageButton.onclick = () => props.onPageChange(i);
    pageButtons.push(pageButton);
  }
  
  render(pagesContainer, pageButtons);

  // Add event listeners for prev/next buttons
  const prevButton = template.content.querySelector(".pagination-prev")! as HTMLButtonElement;
  const nextButton = template.content.querySelector(".pagination-next")! as HTMLButtonElement;
  
  prevButton.disabled = props.currentPage === 1;
  nextButton.disabled = props.currentPage === props.totalPages;
  
  prevButton.onclick = () => {
    if (props.currentPage > 1) {
      props.onPageChange(props.currentPage - 1);
    }
  };
  
  nextButton.onclick = () => {
    if (props.currentPage < props.totalPages) {
      props.onPageChange(props.currentPage + 1);
    }
  };

  return template.content;
};

-----------------------------------
    
    // Пример использования
interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
  const users: IUser[] = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
    // ... больше пользователей
  ];
  
  const UserRow = (user: IUser) => {
    const template = useTemplate();
    template.innerHTML = `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td><button class="user-action">View</button></td>
      </tr>
    `;
    
    template.content.querySelector(".user-action")!.addEventListener("click", () => {
      console.log("View user:", user.id);
    });
    
    return template.content;
  };
  
  const columns: ITableColumn<IUser>[] = [
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "age", title: "Age" },
    { 
      key: "actions", 
      title: "Actions",
      render: (_, user) => {
        const button = document.createElement("button");
        button.textContent = "View";
        button.onclick = () => console.log("View user:", user.id);
        return button;
      }
    }
  ];
  
  // Использование с кастомным компонентом строки
  const tableWithComponent = Table<IUser>({
    items: users,
    columns,
    itemComponent: UserRow,
    pageSize: 5
  });
  
  // Или автоматическая генерация строк на основе columns
  const tableWithAutoRows = Table<IUser>({
    items: users,
    columns,
    pageSize: 5
  });
  
  // Добавление таблицы в DOM
document.body.appendChild(tableWithComponent);
  


// Ключевые особенности реализации:

// Поддержка как автоматической генерации строк на основе columns, так и кастомного компонента для строк

// Пагинация с кнопками "Previous/Next" и номерами страниц

// Возможность кастомизации отображения ячеек через функцию render в columns

// Поддержка кастомного заголовка таблицы

// Адаптация под ваш стиль кода с использованием шаблонов

// Вы можете настроить количество элементов на странице через параметр pageSize. Пагинация автоматически скрывается, если все элементы помещаются на одну страницу.
