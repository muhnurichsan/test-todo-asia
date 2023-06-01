import { useCallback, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";
import useTodos from "@/hooks/useTodos";
import { TodoTypes } from "@/services/data-types";
import {
  DELETE_TASK,
  UPDATE_COMPLETE_TASK,
  UPDATE_TASK,
} from "@/services/todo";
import { toast } from "react-toastify";

interface TodoListProps {
  data: TodoTypes;
}

const TodoList: React.FC<TodoListProps> = ({ data }) => {
  const { mutate: mutateTodo } = useTodos();
  const [taskInput, setTaskInput] = useState(data.task);
  const [taskClicked, setTaskClicked] = useState(false);

  const handleUpdateTask = useCallback(async () => {
    const result = await UPDATE_TASK(data.id, {
      task: taskInput,
    });
    if (result?.error) {
      toast.error(result.message);
    } else {
      mutateTodo();
    }
  }, [data.id, taskInput, mutateTodo]);

  const handleCompleteTask = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const result = await UPDATE_COMPLETE_TASK(data.id, {
        done: e.target.checked,
      });
      if (result?.error) {
        toast.error(result.message);
      } else {
        toast.success(
          `berhasil merubah task menjadi ${
            e.target.checked === true ? "selesai" : "belum selesai"
          }`
        );
        mutateTodo();
      }
    },
    [data.id, mutateTodo]
  );

  const handleDeleteTodo = useCallback(async () => {
    const result = await DELETE_TASK(data.id);
    if (result?.error) {
      toast.error(result.message);
    } else {
      toast.success("berhasil menghapus task");
      mutateTodo();
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
        <Checkbox checked={data.done} onChange={handleCompleteTask}></Checkbox>
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
