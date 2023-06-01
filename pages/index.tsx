import { FormTodo, TodoItem } from "@/components";
import useTodos from "@/hooks/useTodos";
import { TodoTypes } from "@/services/data-types";
import { CREATE_TODOS } from "@/services/todo";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

export default function Home() {
  const { data = [], mutate: mutateTodo } = useTodos();
  const [taskInput, setTaskInput] = useState("");

  const handleInputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleSortDescendingTodo = useCallback(async () => {
    mutate(
      "/api/todo",
      async (todos) => {
        function compare(a: TodoTypes, b: TodoTypes) {
          if (a.task > b.task) {
            return -1;
          }
          if (a.task < b.task) {
            return 1;
          }
          return 0;
        }

        const sorted = todos.sort(compare);

        return [...sorted];
      },
      { revalidate: false }
    );
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const result = await CREATE_TODOS({
        task: taskInput,
      });
      if (result?.error) {
        toast.error(result.message);
      } else {
        toast.success("berhasil menambah task");
        mutateTodo();
      }
    },
    [taskInput, mutateTodo]
  );

  return (
    <div className="h-100 w-full flex items-center justify-center ">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <FormTodo
          onSubmit={handleSubmit}
          handleInputTask={handleInputTask}
          handleSortTodo={handleSortDescendingTodo}
        ></FormTodo>
        <ul className="flex gap-5 flex-col text-center">
          {data.length === 0 && "tidak ada task"}
          {data.map((item: any, index: number) => {
            return <TodoItem key={`todo-${index}`} data={item}></TodoItem>;
          })}
        </ul>
      </div>
    </div>
  );
}
