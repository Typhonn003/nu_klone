import "./style.css";

export function TotalMoney({ data }) {

  const filterData = data.filter((item) => item.type !== "expense");

  const sum = filterData.reduce(
    (previous, current) => current.value + previous,
    0
  );

  return (
    <div className="total_money_container">
      <div className="total_value">
        <p className="title3">Valor total:</p>
        <p className="title3">
          {sum.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
        </p>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
