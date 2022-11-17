import "./style.css";

export function TrashButton({ onClick }) {
  
  return (
    <button className="trash_btn" onClick={onClick}>
      <span className="gg-trash"></span>
    </button>
  );
}
