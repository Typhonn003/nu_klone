import { Form, Header, List, TotalMoney } from "../../components";
import { usePage } from "../../hooks/usePage";
import "./style.css";

export const FinancePage = () => {
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
};
