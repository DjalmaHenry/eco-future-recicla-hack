import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Salgadinho from "../../../../assets/images/itens/salgadinho.png";
import { BsArrowLeft } from "react-icons/bs";
import "./MetalPackaging.css";

export function MetalPackaging() {
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
            <div className="name">Embalagens metalizadas</div>
          </div>
          <div className="item">
            <div>
              <img className="photo-metal" src={Salgadinho} alt="Salgadinho" />
            </div>

            <div className="bottom">
              <div className="description">
                <ul>
                  <li>
                    <p>Embalagens laminadas (BOPP) utilizadas em embalagens de biscoitos, salgadinhos, sopas, café, etc, são um produto de difícil reciclagem pelo pouco valor do produto no mercado e das dificuldades com a limpeza. No Estado de São Paulo, por exemplo, pouquíssimas cooperativas fazem a reciclagem do produto;</p>
                  </li>
                  <li>
                    <p>
                    Caso seja possível encontrar uma cooperativa que receba o produto, o processo de preparação seria uma boa limpeza de resíduos do item, aproveitando água de reuso, como de lavagem de louça ou máquina de lavar, e deixar secar;
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
