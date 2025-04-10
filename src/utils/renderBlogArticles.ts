import { BlogArticles } from "../components/BlogArticles";
import { VNode } from "../types";
import { useRef } from "../hooks/useRef";

export const renderBlogArticles = (
  articles: Array<{
    title: string;
    posted: string;
    status: string;
    statsNum: number;
  }>,
  template: VNode
) => {
  const tbody = useRef("#content tbody", template);
  console.log(template);
  // const tbody = document.querySelector("#content tbody");
  if (!tbody) {
    console.log("1212121212");
    return;
  }

  // Очищаем существующие статьи
  // tbody.innerHTML = "";

  // Добавляем новые статьи
  articles.forEach((article) => {
    const articleFragment = BlogArticles(
      article.title,
      article.posted,
      article.status,
      article.statsNum
    );
    tbody.appendChild(articleFragment);
  });
};
