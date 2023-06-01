import Button from "./Button";
import Input from "./Input";

interface FormTodoProps {
  onSubmit: (e: React.FormEvent) => void;
  handleInputTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormTodo: React.FC<FormTodoProps> = ({ onSubmit, handleInputTask }) => {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <h1 className="text-black font-bold text-xl">Todo List</h1>
      <div className="flex mt-4 gap-5">
        <Input label="task" type="text" onChange={handleInputTask}></Input>
        <Button type="submit" label="Add"></Button>
      </div>
    </form>
  );
};

export default FormTodo;
