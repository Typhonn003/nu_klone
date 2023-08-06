import { ReactNode } from "react";
import "./style.css";

interface ButtonProps {
  children: ReactNode;
  className: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const Button = ({ children, className, type, onClick }: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
