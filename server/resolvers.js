import { News, NewsMedia } from "./db.js";

function rejectIf(condition) {
  if (condition) {
    throw new Error("Unauthorized");
  }
}

export const resolvers = {
  Query: {
    newsMedia: (_root, { id }) => NewsMedia.findById(id),
    news: (_root, { id }) => News.findById(id),
    newses: () => News.findAll(),
  },

  Mutation: {
    createNews: (_root, { input }, { user }) => {
      rejectIf(!user);
      return News.create({ ...input, newsMediaId: user.newsMediaId });
    },
    deleteNews: async (_root, { id }, { user }) => {
      rejectIf(!user);
      const news = await News.findById(id);
      rejectIf(news.newsMediaId !== user.newsMediaId);
      return News.delete(id);
    },
    updateNews: async (_root, { input }, { user }) => {
      rejectIf(!user);
      const news = await News.findById(input.id);
      rejectIf(news.newsMediaId !== user.newsMediaId);
      return News.update({ ...input, newsMediaId: user.newsMediaId });
    },
  },

  NewsMedia: {
    news: (newsMedia) => News.findAll((news) => news.newsMediaId === newsMedia.id),
  },

  News: {
    newsMedia: (news) => NewsMedia.findById(news.newsMediaId),
  },
};
