import { ButtonHTMLAttributes } from "react";

interface button extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "lg" | "sm";
}

const Button: React.FC<button> = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>;
};

export default Button;
