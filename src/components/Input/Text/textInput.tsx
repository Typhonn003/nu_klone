import { ChangeEvent } from "react";
import "./style.css";

interface TextInputProps {
  id: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const TextInput = ({
  id,
  value,
  onChange,
  placeholder,
}: TextInputProps) => {
  return (
    <input
      className="default_input"
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
};
