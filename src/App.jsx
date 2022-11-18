import "./styles/reset.css";
import "./styles/globalStyle.css";
import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { FinancePage } from "./components/FinancePage";

function App() {

  const [enterFinancePage, SetEnterFinancePage] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);

  const addTransaction = (newTransaction) => setListTransactions([...listTransactions, newTransaction]);
  const removeTransaction = (transaction) => setListTransactions([...listTransactions.filter((item) => item !== transaction)]);

  if (enterFinancePage) {

    return (
      <FinancePage
        SetEnterFinancePage={SetEnterFinancePage}
        listTransactions={listTransactions}
        addTransaction={addTransaction}
        removeTransaction={removeTransaction}
      />
    );
  } else {
    
    return <HomePage SetEnterFinancePage={SetEnterFinancePage} />;
  }
}

export default App;
