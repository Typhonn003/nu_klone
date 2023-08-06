import { useState } from "react";
import { usePage } from "../../hooks/usePage";
import "./style.css";
import { DefaultButton } from "..";
import { EmptyCard } from "./EmptyCard";
import { Card } from "./Card";

export const List = () => {
  const { transactionList } = usePage();
  const [filter, setFilter] = useState("all");

  if (!transactionList.length) {
    return (
      <div className="list_container">
        <div className="list_container_header">
          <p className="title3">Resumo financeiro</p>
          <div className="btn_container">
            <DefaultButton className="pink_btn">Todos</DefaultButton>
            <DefaultButton className="grey_btn">Entradas</DefaultButton>
            <DefaultButton className="grey_btn">Despesas</DefaultButton>
          </div>
        </div>

        <h2 className="title2">Você ainda não possui nenhum lançamento</h2>
        <div className="list_empty_card_container">
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
            <DefaultButton
              className="pink_btn"
              onClick={() => setFilter("all")}
            >
              Todos
            </DefaultButton>
            <DefaultButton
              className="grey_btn"
              onClick={() => setFilter("entry")}
            >
              Entradas
            </DefaultButton>
            <DefaultButton
              className="grey_btn"
              onClick={() => setFilter("expense")}
            >
              Despesas
            </DefaultButton>
          </div>
        </div>
        <div className="list_card_container">
          {filter === "all"
            ? transactionList.map((item, index) => {
                return <Card key={index} item={item} />;
              })
            : transactionList
                .filter((transaction) => transaction.type === filter)
                .map((item, index) => {
                  return <Card key={index} item={item} />;
                })}
        </div>
      </div>
    );
  }
};
