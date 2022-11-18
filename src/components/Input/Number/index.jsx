import "./style.css";

export function NumberInput({ id, value, onChange, placeholder }) {
    
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
}
