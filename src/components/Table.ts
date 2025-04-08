import { ITableColumn, ITableProps, VNode } from "../types";

import { Pagination } from "./Pagination";
import { render } from "../utils/render";
import { useTemplate } from "../hooks/useTemplate";

export const Table = <T>(props: ITableProps<T>) => {
  const template = useTemplate();
  const state = {
    currentPage: 1,
  };

  const updateTable = () => {
    const pageSize = props.pageSize || props.items.length;
    const totalPages = Math.ceil(props.items.length / pageSize);
    const paginatedItems = props.items.slice(
      (state.currentPage - 1) * pageSize,
      state.currentPage * pageSize
    );

    // Clear previous content
    const container = template.content.querySelector(".table-container")!;
    container.innerHTML = `
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    `;

    const thead = container.querySelector("thead")!;
    const tbody = container.querySelector("tbody")!;

    // Render header
    if (props.header) {
      render(thead, props.header);
    } else {
      const headerRow = document.createElement("tr");
      props.columns.forEach((column) => {
        const th = document.createElement("th");
        th.textContent = column.title;
        headerRow.appendChild(th);
      });
      render(thead, headerRow);
    }

    // Render rows
    if (props.itemComponent) {
      render(
        tbody,
        paginatedItems.map((item) => props.itemComponent!(item))
      );
    } else {
      paginatedItems.forEach((item) => {
        const row = document.createElement("tr");
        props.columns.forEach((column) => {
          const td = document.createElement("td");
          const value = (item as any)[column.key];

          if (column.render) {
            const rendered = column.render(value, item);
            render(
              td,

              rendered
            );
          } else {
            td.textContent = value;
          }

          row.appendChild(td);
        });
        render(tbody, row);
      });
    }

    // Add pagination if needed
    if (props.pageSize && props.items.length > props.pageSize) {
      const pagination = Pagination({
        currentPage: state.currentPage,
        totalPages,
        onPageChange: (page) => {
          state.currentPage = page;
          updateTable();
        },
      });

      container.appendChild(pagination);
    }
  };

  // Initial render
  template.innerHTML = `
    <div class="table-container ${props.className || ""}"></div>
  `;

  updateTable();

  return template.content;
};
