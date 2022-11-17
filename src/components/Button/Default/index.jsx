import "./style.css";

export function Button({ children, className, type, onClick }) {
  
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
