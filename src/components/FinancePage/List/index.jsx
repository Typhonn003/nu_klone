import "./style.css";
import { Button } from "../../Button/Default";
import { EmptyCard } from "./EmptyCard";

export function List({ listTransactions }) {
  
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

        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </div>
    );
  } else {
  }
}
