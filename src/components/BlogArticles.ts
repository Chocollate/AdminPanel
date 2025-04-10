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
        <th class="blog__title">
          <div class="blog__title-block">
            <p>${title}</p>
            <p>${posted}</p>
          </div>
        </th>
        <th class="blog__status">
          <p>${status}</p>
        </th>
        <th class="blog__stats">
          ${statsNum} <span>Views</span>
        </th>
        <th class="blog__menu">
          <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
          <label class="burger" for="burger-checkbox"><span></span></label>
          
        </th>
      </tr>
    `;

  return template.content;
};
