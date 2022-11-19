import "./style.css";
import { TrashButton } from "../../../Button/Trash";

export function Card({ description, value, type, item, removeTransaction }) {

  if (type === "entry") {
    return (
      <div className="card_container">
        <div className="card_left_border_green"></div>
        <div className="card">
          <h2 className="title3 transaction_name">{description}</h2>
          <p className="transaction_value">{value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
          <div className="trash_btn_div">
            <TrashButton onClick={() => removeTransaction(item)} />
          </div>
          <p className="transaction_type">Entrada</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card_container">
        <div className="card_left_border_grey"></div>
        <div className="card">
          <h2 className="title3 transaction_name">{description}</h2>
          <p className="transaction_value">{value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
          <div className="trash_btn_div">
            <TrashButton onClick={() => removeTransaction(item)} />
          </div>
          <p className="transaction_type">Despesa</p>
        </div>
      </div>
    );
  }
}
