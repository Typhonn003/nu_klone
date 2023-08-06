import "./styles/reset.css";
import "./styles/globalStyle.css";
import { usePage } from "./hooks/usePage";
import { FinancePage, LandingPage } from "./pages";

export const App = () => {
  const { enterFinancePage } = usePage();

  return enterFinancePage ? <FinancePage /> : <LandingPage />;
};
