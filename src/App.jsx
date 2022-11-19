import "./styles/reset.css";
import "./styles/globalStyle.css";
import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { HomePage } from "./components/HomePage";

function App() {

  const [enterFinancePage, SetEnterFinancePage] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  const addTransaction = (newTransaction) => setListTransactions([...listTransactions, newTransaction]);
  const removeTransaction = (transaction) => setListTransactions([...listTransactions.filter((item) => item !== transaction)]);

  if (enterFinancePage) {

    return (
      <HomePage
        SetEnterFinancePage={SetEnterFinancePage}
        listTransactions={listTransactions}
        addTransaction={addTransaction}
        removeTransaction={removeTransaction}
      />
    );
  } else {
    
    return <LandingPage SetEnterFinancePage={SetEnterFinancePage} />;
  }
}

export default App;
