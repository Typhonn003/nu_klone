import "./styles/reset.css";
import "./styles/globalStyle.css";
import { useState } from "react";
import { HomePage } from "./components/HomePage";

function App() {

  /* const [listTransactions, setListTransactions] = useState([]) */
  const [enterFinancePage, SetEnterFinancePage] = useState(false);

  if (enterFinancePage) {
  } else {
    
    return <HomePage SetEnterFinancePage={SetEnterFinancePage} />;
  }
}

export default App;
