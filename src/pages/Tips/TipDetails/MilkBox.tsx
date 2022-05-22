import React from 'react'
import Navbar from "../../../components/Navbar/Navbar";
import CaixaLeite from "../../../assets/images/CaixaLeite.jpeg";
import { BsArrowLeft } from "react-icons/bs";
import './MilkBox.css';

export function MilkBox() {
  return (
    <div className="tip-container">
      <Navbar />
      <div className="item-container">
        <div className="item-elements">
          <div className="top">
            <div className="back-button"><a href="/tips"><BsArrowLeft/></a></div>
            <div className="name">
              Caixa de leite
            </div>
          </div>
          <div className="mid">
            <div className="photo">
            <img src={CaixaLeite} alt="Caixa de leite"/>
            </div>
          </div>
          <div className="bottom">
            <div className="description">
              <ul>
                <li><p>Material reciclável;</p></li>
                <li><p>Risco de contaminação em caso
                   de quebra (contém substâncias toxicas);</p></li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}