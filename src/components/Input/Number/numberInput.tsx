import { ChangeEvent } from "react";
import "./style.css";

interface NumberInputProps {
  id: string;
  value?: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const NumberInput = ({
  id,
  value,
  onChange,
  placeholder,
}: NumberInputProps) => {
  return (
    <input
      className="default_input"
      type="number"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min="1"
      required
    />
  );
};
