import "./style.css";
import { Header } from "./Header";
import { Form } from "./Form";
import { useState } from "react";
import { TotalMoney } from "./TotalMoney";
import { List } from "./List";

export function FinancePage({ SetEnterFinancePage }) {

  const exitPage = () => SetEnterFinancePage(false);

  const [data, setData] = useState([]);

  const addData = (newData) => setData([...data, newData]);

  return (
    <div className="finance_page">
      <Header exitPage={exitPage} />

      <main className="container">
        <Form addData={addData} />
        <TotalMoney data={data} />
        <List data={data} />
      </main>
    </div>
  );
}
