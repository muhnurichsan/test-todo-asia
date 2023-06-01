import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useTodos = () => {
  const { data, isLoading, mutate } = useSWR("/api/todo", fetcher);

  return {
    data,
    isLoading,
    mutate,
  };
};

export default useTodos;
