import "./style.css";
import { Header } from "./Header";
import { Form } from "./Form";
import { TotalMoney } from "./TotalMoney";
import { List } from "./List";
import { usePage } from "../../hooks/usePage";

export function HomePage() {
  const { transactionList } = usePage();
  return (
    <div className="finance_page">
      <Header />

      <main className="container">
        <section className="main_data_container">
          <Form />
          {transactionList.length > 0 ? <TotalMoney /> : null}
        </section>
        <section className="main_cards_container">
          <List />
        </section>
      </main>
    </div>
  );
}
