import type { Article } from './articles';

const routeTopics = new Set(['nha-trang', 'can-tho', 'vung-tau', 'ho-tram', 'xe-cuoi', 'san-bay']);

/** Prioritize the same destination or service, then shared planning needs. */
export function relatedArticles(article: Article, candidates: Article[]) {
  const topics = new Set(article.topics ?? []);
  const primaryTopics = [...topics].filter((topic) => routeTopics.has(topic));
  return candidates
    .filter((candidate) => candidate.slug !== article.slug)
    .filter((candidate) => {
      const candidatePrimary = (candidate.topics ?? []).filter((topic) => routeTopics.has(topic));
      return (
        !primaryTopics.length ||
        !candidatePrimary.length ||
        candidatePrimary.some((topic) => topics.has(topic))
      );
    })
    .map((candidate) => ({
      article: candidate,
      score: [...new Set(candidate.topics ?? [])].reduce(
        (score, topic) => score + (topics.has(topic) ? (routeTopics.has(topic) ? 5 : 1) : 0),
        0,
      ),
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((candidate) => candidate.article);
}

export const articleSectionId = (index: number) => `article-section-${index + 1}`;
