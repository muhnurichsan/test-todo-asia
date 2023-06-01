interface InputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "password" | "checkbox";
  name?: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  onClick?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  type,
  name,
  placeholder,
  required,
  onClick,
}) => {
  return (
    <div className="relative w-full border-[1px] rounded-md">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        onClick={onClick}
        className={`p-3 block 
        w-full 
        border-gray-200 
        rounded-md text-sm 
        focus:border-blue-500 
        focus:ring-blue-500
        placeholder:text-xs
        `}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
