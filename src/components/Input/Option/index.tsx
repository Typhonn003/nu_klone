import { ReactNode } from "react";

interface OptionProps {
  value: string;
  children: ReactNode;
}

export function Option({ value, children }: OptionProps) {
  return <option value={value}>{children}</option>;
}
