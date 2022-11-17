import "./style.css";

export function TextInput({ value, onChange, placeholder }) {
    
  return (
    <input
      className="default_input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
