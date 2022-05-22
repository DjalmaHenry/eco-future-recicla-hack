import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Lampada from "../../../../assets/images/itens/lampada.png";
import { BsArrowLeft } from "react-icons/bs";
import "./FlorescentBulb.css";

export function FlorescentBulb() {
  return (
    <div className="tip-container">
      <Navbar />
      <div className="item-container">
        <div className="item-elements">
          <div className="top-item">
            <div className="back-button">
              <a href="/tips">
                <BsArrowLeft className="back" />
              </a>
            </div>
            <div className="name">Lâmpadas Florescente</div>
          </div>
          <div className="item">
            <div>
              <img className="photo-bulb" src={Lampada} alt="Lâmpada" />
            </div>

            <div className="bottom">
              <div className="description">
                <ul>
                  <li>
                    <p>Material reciclável;</p>
                  </li>
                  <li>
                    <p>
                      Risco de contaminação em caso de quebra (contém
                      substâncias toxicas);
                    </p>
                  </li>
                  <li>
                    <p>
                    Podem ser agrupadas em qualquer embalagem simples para o transporte e retornadas nos pontos de coleta ou entregues as cooperativas que trabalhem com esse material. Em caso de contato com lâmpadas quebradas lavar bem a área do contato e falar com o seu médico;
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
