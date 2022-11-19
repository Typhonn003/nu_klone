import "./style.css";

export function EmptyCard() {
    
  return (
    <div className="empty_card_container">
      <div className="empty_card_left_border"></div>
      <div className="empty_card">
        <div className="empty_card_detail_top"></div>
        <div className="empty_card_detail_bot"></div>
      </div>
    </div>
  );
}
