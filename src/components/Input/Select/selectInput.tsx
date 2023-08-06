import { ChangeEvent, ReactNode } from "react";
import "./style.css";

interface SelectInputProps {
  id: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

export const SelectInput = ({ id, onChange, children }: SelectInputProps) => {
  return (
    <select className="default_select" id={id} onChange={onChange}>
      {children}
    </select>
  );
};
