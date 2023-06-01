interface InputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text";
  name?: string;
  placeholder?: string;
  onClick?: (e: any) => void;
  onKeyUp?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  type,
  name,
  placeholder,
  onClick,
  onKeyUp,
}) => {
  return (
    <div className="relative w-full border-[1px] rounded-md">
      <input
        onKeyUp={onKeyUp}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        onClick={onClick}
        className={`p-2 block 
        w-full 
        h-full
        rounded-md text-sm 
        placeholder:text-xs
        focus:border-black
        `}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
