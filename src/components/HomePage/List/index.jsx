import "./style.css";
import { Button } from "../../Button/Default";
import { EmptyCard } from "./EmptyCard";
import { Card } from "./Card";
import { useState } from "react";

export function List({ listTransactions, removeTransaction }) {
  
  const [filter, setFilter] = useState("all");

  if (!listTransactions.length) {
    return (
      <div className="list_container">
        <div className="list_container_header">
          <p className="title3">Resumo financeiro</p>
          <div className="btn_container">
            <Button className="pink_btn">Todos</Button>
            <Button className="grey_btn">Entradas</Button>
            <Button className="grey_btn">Despesas</Button>
          </div>
        </div>

        <h2 className="title2">Você ainda não possui nenhum lançamento</h2>
        <div className="list_empty_card_container">
          <EmptyCard />
          <EmptyCard />
          <EmptyCard />
        </div>
      </div>
    );
  } else {
    return (
      <div className="list_container">
        <div className="list_container_header">
          <p className="title3">Resumo financeiro</p>
          <div className="btn_container">
            <Button className="pink_btn" onClick={() => setFilter("all")}>
              Todos
            </Button>
            <Button className="grey_btn" onClick={() => setFilter("entry")}>
              Entradas
            </Button>
            <Button className="grey_btn" onClick={() => setFilter("expense")}>
              Despesas
            </Button>
          </div>
        </div>
        <div className="list_card_container">
          {filter === "all"
            ? listTransactions.map((item, index) => {
                return (
                  <Card
                    key={index}
                    description={item.description}
                    value={item.value}
                    type={item.type}
                    item={item}
                    removeTransaction={removeTransaction}
                  />
                );
              })
            : listTransactions
                .filter((transaction) => transaction.type === filter)
                .map((item, index) => {
                  return (
                    <Card
                      key={index}
                      description={item.description}
                      value={item.value}
                      type={item.type}
                      item={item}
                      removeTransaction={removeTransaction}
                    />
                  );
                })}
        </div>
      </div>
    );
  }
}
