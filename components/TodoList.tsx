import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";

interface TodoListProps {
  data: Record<string, any>;
}

const TodoList: React.FC<TodoListProps> = ({ data }) => {
  const [titleClicked, setTitleClicked] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <li
      onClick={() => {
        setTitleClicked(false);
      }}
      className="flex justify-between items-center"
    >
      <div className="flex gap-3">
        <Checkbox
          checked={data.done}
          onChange={() => {
            setChecked(!checked);
          }}
        ></Checkbox>
        {titleClicked ? (
          <Input
            label="task"
            type="text"
            value={data.task}
            onChange={() => {}}
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></Input>
        ) : (
          <p
            className={`text-md font-semibold ${data.done && "line-through"}`}
            onClick={(e: any) => {
              e.stopPropagation();
              setTitleClicked(true);
            }}
          >
            {data.task}
          </p>
        )}
      </div>
      <div>
        <Button type="button" color="red" label="Delete"></Button>
      </div>
    </li>
  );
};

export default TodoList;
