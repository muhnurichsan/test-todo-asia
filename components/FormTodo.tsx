import Button from "./Button";
import Input from "./Input";

interface FormTodoProps {
  onSubmit: (e: React.FormEvent) => void;
  handleInputTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortTodo: () => void;
}

const FormTodo: React.FC<FormTodoProps> = ({
  onSubmit,
  handleInputTask,
  handleSortTodo,
}) => {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <h1 className="text-black font-bold text-xl">Todo List</h1>
      <div className="flex mt-4 gap-5">
        <Input
          placeholder="masukkan nama task"
          type="text"
          onChange={handleInputTask}
        ></Input>
        <Button type="submit" label="Add"></Button>
        <div className="w-1/2">
          <Button
            type="button"
            label="Descending Order"
            color="grey"
            onClick={handleSortTodo}
          ></Button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
