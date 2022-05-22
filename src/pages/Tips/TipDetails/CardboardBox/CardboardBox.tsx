import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Papelao from "../../../../assets/images/itens/papelao.png";
import { BsArrowLeft } from "react-icons/bs";
import "./CardboardBox.css";

export function CardboardBox() {
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
            <div className="name">Caixa de papelão</div>
          </div>
          <div className="item">
            <div>
              <img className="photo-cardboard" src={Papelao} alt="Caixa de papelão" />
            </div>

            <div className="bottom">
              <div className="description">
                <ul>
                  <li>
                    <p>Papelão (e papeis no geral) são um dos itens mais reciclados no mundo;</p>
                  </li>
                  <li>
                    <p>
                        Essenciais para redução de desmatamento;
                    </p>
                  </li>
                  <li>
                    <p>
                        É necessário que estejam secos, sem gordura ou resíduos de comida e outros materiais, como adesivos ou grampos na embalagem. A limpeza de resíduos pode ser feita utilizando água de reuso (como de lavagem de roupas) e as caixas podem ser compactadas para melhor transporte.
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
