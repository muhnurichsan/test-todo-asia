interface ButtonProps {
  color?: "red" | "grey";
  label?: string;
  type: "submit" | "button";
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color,
  label,
  type,
  onClick,
  fullWidth,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
      py-3 
      px-3 
      inline-flex 
      justify-center 
      items-center 
      gap-2 rounded-md
      border 
      font-semibold
    ${
      color === "red"
        ? "text-white bg-red-600 hover:bg-red-500 focus:ring-red-500"
        : color === "grey"
        ? "text-white bg-slate-600 focus:ring-slate-300 hover:bg-slate-500 "
        : "text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-500"
    }
      ring-offset-white 
      focus:outline-none 
      focus:ring-2 
      focus:ring-offset-2 
      transition-all 
      ${fullWidth ? "w-full" : "w-fit"}
      `}
    >
      <p className="block text-xs md:text-md">{label}</p>
    </button>
  );
};

export default Button;
