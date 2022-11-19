import "./style.css";
import { Button } from "../../Button/Default";

export function Header({ exitPage }) {
    
  return (
    <header className="finance_header">
      <div className="container">
        <div className="header-container">
          <h1 className="title1">
            <span>Nu</span> Kenzie
          </h1>
          <Button className="grey_btn" onClick={exitPage}>
            Inicio
          </Button>
        </div>
      </div>
    </header>
  );
}
