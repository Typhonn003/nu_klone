import "./styles/reset.css";
import "./styles/globalStyle.css";
import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { FinancePage } from "./components/FinancePage";

function App() {

  /* const [listTransactions, setListTransactions] = useState([]) */
  const [enterFinancePage, SetEnterFinancePage] = useState(false);

  if (enterFinancePage) {

    return <FinancePage SetEnterFinancePage={SetEnterFinancePage} />;
  } else {
    
    return <HomePage SetEnterFinancePage={SetEnterFinancePage} />;
  }
}

export default App;
