import { IPaginationProps, VNode } from "../types";

import { render } from "../utils/render";
import { useTemplate } from "../hooks/useTemplate";

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
  const maxVisiblePages = 5;
  let startPage = Math.max(
    1,
    props.currentPage - Math.floor(maxVisiblePages / 2)
  );
  let endPage = Math.min(props.totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // First page
  if (startPage > 1) {
    const firstPageButton = document.createElement("button");
    firstPageButton.textContent = "1";
    firstPageButton.onclick = () => props.onPageChange(1);
    pageButtons.push(firstPageButton);

    if (startPage > 2) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      pageButtons.push(ellipsis);
    }
  }

  // Visible pages
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i.toString();
    pageButton.className = i === props.currentPage ? "active" : "";
    pageButton.onclick = () => props.onPageChange(i);
    pageButtons.push(pageButton);
  }

  // Last page
  if (endPage < props.totalPages) {
    if (endPage < props.totalPages - 1) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      pageButtons.push(ellipsis);
    }

    const lastPageButton = document.createElement("button");
    lastPageButton.textContent = props.totalPages.toString();
    lastPageButton.onclick = () => props.onPageChange(props.totalPages);
    pageButtons.push(lastPageButton);
  }

  render(pagesContainer, pageButtons);

  // Add event listeners for prev/next buttons
  const prevButton = template.content.querySelector(
    ".pagination-prev"
  )! as HTMLButtonElement;
  const nextButton = template.content.querySelector(
    ".pagination-next"
  )! as HTMLButtonElement;

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
