import { useCallback, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";
import axios from "axios";
import useTodos from "@/hooks/useTodos";
import { TodoTypes } from "@/services/data-types";

interface TodoListProps {
  data: TodoTypes;
}

const TodoList: React.FC<TodoListProps> = ({ data }) => {
  const { mutate: mutateTodo } = useTodos();
  const [taskInput, setTaskInput] = useState(data.task);
  const [taskClicked, setTaskClicked] = useState(false);

  const handleUpdateTask = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();

      try {
        await axios.put(`/api/todo/edit/${data.id}`, {
          task: taskInput,
        });
      } catch (error) {
        console.log(error);
      } finally {
        mutateTodo();
      }
    },
    [data.id, taskInput, mutateTodo]
  );

  const handleDoneTodo = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        await axios.put(`/api/todo/edit/${data.id}`, {
          done: e.target.checked,
        });
        mutateTodo();
      } catch (error) {
        console.log(error);
      }
    },
    [data.id, mutateTodo]
  );

  const handleDeleteTodo = useCallback(async () => {
    try {
      await axios.delete(`/api/todo/delete/${data.id}`);
      mutateTodo();
    } catch (error) {
      console.log(error);
    }
  }, [data.id, mutateTodo]);

  return (
    <li
      onClick={() => {
        setTaskClicked(false);
      }}
      className="flex justify-between items-center"
    >
      <div className="flex gap-3">
        <Checkbox checked={data.done} onChange={handleDoneTodo}></Checkbox>
        {taskClicked ? (
          <Input
            type="text"
            onChange={(e) => {
              setTaskInput(e.target.value);
            }}
            value={taskInput}
            onKeyUp={handleUpdateTask}
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></Input>
        ) : (
          <p
            className={`text-md font-semibold ${data.done && "line-through"}`}
            onClick={(e: any) => {
              e.stopPropagation();
              setTaskClicked(true);
            }}
          >
            {data.task}
          </p>
        )}
      </div>
      <div>
        <Button
          type="button"
          color="red"
          label="Delete"
          onClick={handleDeleteTodo}
        ></Button>
      </div>
    </li>
  );
};

export default TodoList;
