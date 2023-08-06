import "./style.css";

interface TrashButtonProps {
  onClick: () => void;
}

export const TrashButton = ({ onClick }: TrashButtonProps) => {
  return (
    <button className="trash_btn" onClick={onClick}>
      <span className="gg-trash"></span>
    </button>
  );
};
