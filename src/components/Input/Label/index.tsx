import { ReactNode } from "react";
import "./style.css";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className="default_label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
