import "./styles/reset.css";
import "./styles/globalStyle.css";
import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { FinancePage } from "./components/FinancePage";

function App() {

  const [enterFinancePage, SetEnterFinancePage] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  const addTransaction = (newTransaction) => setListTransactions([...listTransactions, newTransaction]);

  if (enterFinancePage) {

    return (
      <FinancePage
        SetEnterFinancePage={SetEnterFinancePage}
        listTransactions={listTransactions}
        addTransaction={addTransaction}
      />
    );
  } else {
    
    return <HomePage SetEnterFinancePage={SetEnterFinancePage} />;
  }
}

export default App;
