import { useMutation, useQuery } from "@apollo/client";
import { getAccessToken } from "../auth";
import { CREATE_NEWS_MUTATION, NEWSES_QUERY, NEWSMEDIA_QUERY, NEWS_QUERY } from "./queries";

export function useCompany(id) {
  const { data, loading, error } = useQuery(NEWSMEDIA_QUERY, {
    variables: { id },
  });
  return {
    company: data?.company,
    loading,
    error: Boolean(error),
  };
}

export function useCreateJob() {
  const [mutate, { loading, error }] = useMutation(CREATE_NEWS_MUTATION);
  return {
    createJob: async (title, description) => {
      const {
        data: { job },
      } = await mutate({
        variables: { input: { title, description } },
        context: {
          headers: { Authorization: "Bearer " + getAccessToken() },
        },
        update: (cache, { data: { job } }) => {
          cache.writeQuery({
            query: NEWS_QUERY,
            variables: { id: job.id },
            data: { job },
          });
        },
      });
      return job;
    },
    loading,
    error: Boolean(error),
  };
}

export function useNews(id) {
  const { data, loading, error } = useQuery(NEWS_QUERY, {
    variables: { id },
  });
  return {
    news: data?.job,
    loading,
    error: Boolean(error),
  };
}

export function useNewses() {
  const { data, loading, error } = useQuery(NEWSES_QUERY, {
    fetchPolicy: "network-only",
  });
  return {
    jobs: data?.jobs,
    loading,
    error: Boolean(error),
  };
}
