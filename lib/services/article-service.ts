import { articles } from '../content/articles';

/** Replace this source adapter when introducing a CMS; routes keep this interface. */
export const listArticles = () => articles;
export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
