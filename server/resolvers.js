import { GraphQLError } from "graphql";
import { News, NewsMedia } from "./db.js";

function rejectIf(condition) {
  if (condition) {
    throw new Error("Unauthorized");
  }
}

export const resolvers = {
  Query: {
    newsMedia: async (_root, { id }) => {
      const newsMedia = await NewsMedia.findById(id);
      if (!newsMedia) {
        throw notFoundError(`News not found for  ${id}`);
      }
      return newsMedia;
    },
    news: async (_root, { id }) => {
      const news = await News.findById(id);
      if (!news) {
        throw notFoundError(`News not found for  ${id}`);
      }
      return news;
    },
    newses: async () => {
      const newses = await News.findAll();
      if (!newses.length) {
        throw notFoundError(`No News  found `);
      }
      return newses;
    },
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

const notFoundError = (message) => {
  return new GraphQLError(message, {
    extensions: {
      code: "404",
    },
  });
};
