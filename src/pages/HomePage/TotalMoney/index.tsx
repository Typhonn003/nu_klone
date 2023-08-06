import { usePage } from "../../../hooks/usePage";
import "./style.css";

export function TotalMoney() {
  const { transactionList } = usePage();

  const balance = transactionList.reduce(
    (previous, current) =>
      current.type === "entry"
        ? current.value + previous
        : previous - current.value,
    0
  );

  return (
    <div className="total_money_container">
      <div className="total_value">
        <p className="title3">Valor total:</p>
        <p className="title3">
          {balance.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
