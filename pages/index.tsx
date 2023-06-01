import FormTodo from "@/components/FormTodo";
import TodoList from "@/components/TodoList";
import useTodos from "@/hooks/useTodos";
import React, { useCallback, useState } from "react";

export default function Home() {
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "1",
      task: "Hello",
      done: false,
    },
    {
      id: "2",
      task: "Hai",
      done: true,
    },
  ]);

  const { data } = useTodos();
  console.log(data);

  const handleInputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setTodos([
        ...todos,
        {
          id: "3",
          task: taskInput,
          done: false,
        },
      ]);
    },
    [taskInput, todos]
  );
  return (
    <div className="h-100 w-full flex items-center justify-center ">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <FormTodo
          onSubmit={handleSubmit}
          handleInputTask={handleInputTask}
        ></FormTodo>
        <ul className="flex gap-5 flex-col">
          {todos.map((item, index) => {
            return <TodoList key={`todo-${index}`} data={item}></TodoList>;
          })}
        </ul>
      </div>
    </div>
  );
}
