import { ButtonHTMLAttributes, memo } from "react";

interface button extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "lg" | "sm";
}

const Button: React.FC<button> = ({ text, ...rest }) => {
  return (
    <button {...rest}>
      <p>{text}</p>
    </button>
  );
};

const MemorizedButton = memo(Button);

export default MemorizedButton;
