import "./styles/reset.css";
import "./styles/globalStyle.css";
import { LandingPage } from "./pages/LandingPage";
import { usePage } from "./hooks/usePage";
import { HomePage } from "./pages/HomePage";

function App() {
  const { enterFinancePage } = usePage();

  return enterFinancePage ? <HomePage /> : <LandingPage />;
}

export default App;
