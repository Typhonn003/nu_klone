import "./style.css";
import { DefaultButton } from "..";
import { usePage } from "../../hooks/usePage";

export const Header = () => {
  const { togglePage } = usePage();

  return (
    <header className="finance_header">
      <div className="container">
        <div className="header-container">
          <h1 className="title1">
            <span>Nu</span> Klone
          </h1>
          <DefaultButton className="grey_btn" onClick={togglePage}>
            Inicio
          </DefaultButton>
        </div>
      </div>
    </header>
  );
};
