import "./style.css";

export function SelectInput({ id, children, onChange }) {
    
  return (
    <select className="default_select" id={id} onChange={onChange}>
      {children}
    </select>
  );
}
