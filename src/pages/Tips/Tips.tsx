import "./tips.css";
import Navbar from "../../components/Navbar/Navbar";
import Leite from "../../assets/images/itens/leite.png";
import Pet from "../../assets/images/itens/pet.png";
import Lampada from "../../assets/images/itens/lampada.png";
import Papelao from "../../assets/images/itens/papelao.png";
import Salgadinho from "../../assets/images/itens/salgadinho.png";

export function Tips() {
  return (
    <div className="container">
      <Navbar />
      <div className="tips-container">
        <div className="top">
          <div className="title">
            <p>
              <span className="key-word">Itens</span> de reciclagem
            </p>
          </div>
        </div>
        <div className="mid">
          <div className="items-grid">
            <div className="wrapper">
              <div className="element">
                <a className="a-itens" href="/tips/milk">
                  <img
                    className="photo-item"
                    src={Leite}
                    alt="Caixa de leite"
                  />
                  <span>Caixa de leite/suco (tetrapaks)</span>
                </a>
              </div>
              <div className="element">
                <a className="a-itens" href="/tips/cardboard">
                  <img
                    className="photo-item-two"
                    src={Papelao}
                    alt="Caixa de papelão"
                  />
                  <span>Caixa de papelão</span>
                </a>
              </div>
              <div className="element">
                <a className="a-itens" href="/tips/bulb">
                  <img className="photo-item-two" src={Lampada} alt="Lâmpada" />
                  <span>Lâmpadas Florescente</span>
                </a>
              </div>
              <div className="element">
                <a className="a-itens" href="/tips/metal">
                  <img
                    className="photo-item-two"
                    src={Salgadinho}
                    alt="Salgadinho"
                  />
                  <span>Embalagens metalizadas</span>
                </a>
              </div>
              <div className="element">
                <a className="a-itens" href="/tips/pet">
                  <img className="photo-item" src={Pet} alt="Garrafa pet" />
                  <span>Garrafa pet</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
