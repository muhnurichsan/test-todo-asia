import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useTodos = () => {
  const { data, mutate } = useSWR("/api/todo", fetcher);

  return {
    data,
    mutate,
  };
};

export default useTodos;
