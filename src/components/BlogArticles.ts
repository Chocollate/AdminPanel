import { useTemplate } from "../hooks/useTemplate";

export const BlogArticles = (
  title: string,
  posted: string,
  status: string,
  statsNum: number
) => {
  const template = useTemplate();

  template.innerHTML = /*html*/ `
      <tr class="blog__item">
        <td class="blog__title">
          <div class="blog__title-block">
            <p class="blog__title-block-title">${title}</p>
            <p class="blog__title-block-posted">${posted}</p>
          </div>
        </td>
        <td class="blog__status">
          <div class="blog__status-block">
            <div class="blog__status-block-${status.toLowerCase()}">
              <p>${status}</p>
            </div>
          </div>
        </td>
        <td class="blog__stats">
          <div class="blog__stats-block">
            ${statsNum} <span>Views</span>
          </div>
        </td>
        <td class="blog__menu">
          <div class="blog__menu-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
            <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
            <label class="burger" for="burger-checkbox"><span></span></label>
          </div>
        </td>
      </tr>
    `;

  return template.content;
};
