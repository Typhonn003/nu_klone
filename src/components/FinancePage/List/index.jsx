import "./style.css";
import { Button } from "../../Button/Default";
import { EmptyCard } from "./EmptyCard";
import { Card } from "./Card";

export function List({ listTransactions, removeTransaction }) {
  
  if (!listTransactions.length) {
    return (
      <div className="list_container">
        <p className="title3">Resumo financeiro</p>
        <div className="btn_container">
          <Button className="pink_btn">Todos</Button>
          <Button className="grey_btn">Entradas</Button>
          <Button className="grey_btn">Despesas</Button>
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
        <p className="title3">Resumo financeiro</p>
        <div className="btn_container">
          <Button className="pink_btn">Todos</Button>
          <Button className="grey_btn">Entradas</Button>
          <Button className="grey_btn">Despesas</Button>
        </div>
        <div className="list_card_container">
          {listTransactions.map((item, index) => {
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
