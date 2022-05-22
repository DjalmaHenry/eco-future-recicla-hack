import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Leite from "../../../../assets/images/itens/leite.png";
import { BsArrowLeft } from "react-icons/bs";
import "./MilkBox.css";

export function MilkBox() {
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
            <div className="name">Caixa de leite/suco (tetrapaks)</div>
          </div>
          <div className="item">
            <div>
              <img className="photo-milk" src={Leite} alt="Caixa de leite" />
            </div>

            <div className="bottom">
              <div className="description">
                <ul>
                  <li>
                    <p>Material reciclável, mas depende de tecnologia específica para separação de seus materiais e, por isso, nem toda cooperativa recebe;</p>
                  </li>
                  <li>
                    <p>
                    Faça uma limpeza de resíduos do material e deixe emborcado secando para evitar cheiros. Aproveite água de reuso, como de lavagem da louça ou da máquina de lavar;
                    </p>
                  </li>
                  <li>
                    <p>
                    Se possuir tampa, retirar a tampa e guardar à parte da embalagem;
                    </p>
                  </li>
                  <li>
                    <p>
                    Procurar uma cooperativa, catador ou coleta seletiva que aceite esse material em sua área;
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
