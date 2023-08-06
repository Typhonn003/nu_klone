import "./style.css";
import { TrashButton } from "../../../../components/Button/Trash";
import { usePage } from "../../../../hooks/usePage";

interface CardProps {
  description: string;
  value: number;
  type: string;
}

interface ItemProp {
  item: CardProps;
}

export function Card({ item }: ItemProp) {
  const { removeTransaction } = usePage();
  const { description, value, type } = item;

  if (type === "entry") {
    return (
      <div className="card_container">
        <div className="card_left_border_green"></div>
        <div className="card">
          <h2 className="title3 transaction_name">{description}</h2>
          <p className="transaction_value">
            {value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
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
          <p className="transaction_value">
            {value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <div className="trash_btn_div">
            <TrashButton onClick={() => removeTransaction(item)} />
          </div>
          <p className="transaction_type">Despesa</p>
        </div>
      </div>
    );
  }
}
