import "./style.css";

export function Label({ htmlFor, children }) {
    
  return (
    <label className="default_label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
