import "./style.css";

export function SelectInput({ name, id, children }) {
    
  return (
    <select className="default_select" name={name} id={id}>
      {children}
    </select>
  );
}
