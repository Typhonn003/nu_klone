import "./style.css";
import "../../styles/titles.css";
import illustration from "../../img/illustration.svg";
import { Button } from "../Button/Default";

export function LandingPage({ SetEnterFinancePage }) {

  const enterPage = () => SetEnterFinancePage(true);

  return (
    <div className="home_page">
      <div className="container">
        <div className="home_page_info">
          <h1 className="title2">
            <span>Nu</span> Kenzie
          </h1>
          <p className="title1">Centralize o controle das suas finanças</p>
          <p>de forma rápida e segura</p>
          <Button className="pink_btn" onClick={enterPage}>
            Iniciar
          </Button>
        </div>

        <div className="home_page_picture">
          <img src={illustration} alt="Imagem ilustrativa" />
        </div>
      </div>
    </div>
  );
}
