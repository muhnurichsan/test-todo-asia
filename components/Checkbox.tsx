interface CheckboxProps {
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      defaultChecked={checked}
      onChange={onChange}
      className="w-4"
    />
  );
};

export default Checkbox;
