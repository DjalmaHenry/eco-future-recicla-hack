import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Pet from "../../../../assets/images/itens/pet.png";
import { BsArrowLeft } from "react-icons/bs";
import "./PetBottle.css";

export function PetBottle() {
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
            <div className="name">Garrafa pet</div>
          </div>
          <div className="item">
            <div>
              <img className="photo-pet" src={Pet} alt="Garrafa pet" />
            </div>

            <div className="bottom">
              <div className="description">
                <ul>
                  <li>
                    <p>O material das garrafas PET é 100% reciclável e pode ser refundido e moldado várias vezes;</p>
                  </li>
                  <li>
                    <p>
                    É preciso remover a tampa, o lacre e o rótulo, que geralmente são feitos de outro tipo de plástico, o polipropileno, e que fazem o catador perder tempo e dinheiro, já que outros itens recicláveis estão passando pelas esteiras de triagem;
                    </p>
                  </li>
                  <li>
                    <p>
                    As garrafas devem estar livres de resíduos. Se possível fazer uma pequena lavagem com água de reuso, como de lavagem de pratos e roupas;
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
