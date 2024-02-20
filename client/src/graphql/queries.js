import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:9000/graphql";

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const NEWS_DETAIL_FRAGMENT = gql`
  fragment NewsDetail on News {
    id
    title
    newsMedia {
      id
      name
    }
    description
  }
`;

export const NEWSMEDIA_QUERY = gql`
  query NewsMediaQuery($id: ID!) {
    newsMedia(id: $id) {
      id
      name
      description
      news {
        id
        title
      }
    }
  }
`;

export const NEWS_QUERY = gql`
  query NewsQuery($id: ID!) {
    news(id: $id) {
      ...NewsDetail
    }
  }
  ${NEWS_DETAIL_FRAGMENT}
`;

export const NEWSES_QUERY = gql`
  query NewsesQuery {
    newses {
      id
      title
      newsMediaId {
        id
        name
      }
    }
  }
`;

export const CREATE_NEWS_MUTATION = gql`
  mutation CreateNewsMutation($input: CreateNewsInput!) {
    news: createNews(input: $input) {
      ...NewsDetail
    }
  }
  ${NEWS_DETAIL_FRAGMENT}
`;
