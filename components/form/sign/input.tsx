import { InputHTMLAttributes, memo } from "react";

interface input extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<input> = ({ name, label, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input {...rest} name={name} />
    </div>
  );
};

const MemorizedInput = memo(Input);

export default MemorizedInput;
