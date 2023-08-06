import "./style.css";
import "../../styles/titles.css";
import illustration from "../../img/illustration.svg";
import { usePage } from "../../hooks/usePage";
import { DefaultButton } from "../../components";

export const LandingPage = () => {
  const { togglePage } = usePage();

  return (
    <div className="home_page">
      <div className="container">
        <div className="home_page_info">
          <h1 className="title2">
            <span>Nu</span> Klone
          </h1>
          <p className="title1">Centralize o controle das suas finanças</p>
          <p>de forma rápida e segura</p>
          <DefaultButton className="pink_btn" onClick={togglePage}>
            Iniciar
          </DefaultButton>
        </div>

        <div className="home_page_picture">
          <img src={illustration} alt="Imagem ilustrativa" />
        </div>
      </div>
    </div>
  );
};
