import "./style.css";
import { Button } from "../../../components/Button/Default";
import { usePage } from "../../../hooks/usePage";

export function Header() {
  const { togglePage } = usePage();

  return (
    <header className="finance_header">
      <div className="container">
        <div className="header-container">
          <h1 className="title1">
            <span>Nu</span> Kenzie
          </h1>
          <Button className="grey_btn" onClick={togglePage}>
            Inicio
          </Button>
        </div>
      </div>
    </header>
  );
}
