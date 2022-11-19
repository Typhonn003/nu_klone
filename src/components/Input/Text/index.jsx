import "./style.css";

export function TextInput({ id, value, onChange, placeholder }) {
    
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
}
