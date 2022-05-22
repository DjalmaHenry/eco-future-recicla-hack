import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Acre from "../../assets/images/estados/Acre.png";
import Alagoas from "../../assets/images/estados/Alagoas.png";
import Amapa from "../../assets/images/estados/Amapa.png";
import Amazonas from "../../assets/images/estados/Amazonas.png";
import Bahia from "../../assets/images/estados/Bahia.png";
import Ceara from "../../assets/images/estados/Ceara.png";
import DistritoFederal from "../../assets/images/estados/DistritoFederal.png";
import EspiritoSanto from "../../assets/images/estados/EspiritoSanto.png";
import Goias from "../../assets/images/estados/Goias.png";
import Maranhao from "../../assets/images/estados/Maranhao.png";
import MatoGrossodoSul from "../../assets/images/estados/MatoGrossodoSul.png";
import MatoGrosso from "../../assets/images/estados/MatoGrosso.png";
import Para from "../../assets/images/estados/Para.png";
import Paraiba from "../../assets/images/estados/Paraiba.png";
import Parana from "../../assets/images/estados/Parana.png";
import Pernambuco from "../../assets/images/estados/Pernambuco.png";
import Piaui from "../../assets/images/estados/Piaui.png";
import RiodeJaneiro from "../../assets/images/estados/RiodeJaneiro.png";
import RioGrandedoNorte from "../../assets/images/estados/RioGrandedoNorte.png";
import RioGrandedoSul from "../../assets/images/estados/RioGrandedoSul.png";
import Rondonia from "../../assets/images/estados/Rondonia.png";
import Roraima from "../../assets/images/estados/Roraima.png";
import SantaCatarina from "../../assets/images/estados/SantaCatarina.png";
import SaoPaulo from "../../assets/images/estados/SaoPaulo.png";
import Sergipe from "../../assets/images/estados/Sergipe.png";
import Tocantins from "../../assets/images/estados/Tocantins.png";

import "./maps.css";


export function Maps() {
  return (
    <div className="container">
     <Navbar/>
     <div className="maps-container">
      <div className="top-map">
       <div className="title-map">
       <p>Locais de <span className="key-word">coleta</span></p>
       </div>
      </div>
      <div className="mid">
       <div className="maps">
        <div className="map">
         <div className="name-map">
          <p>Acre</p>
         </div>
         <div className="photo">
          <img src={Acre} alt="Mapa do cooperativas de reciclagem do Acre" className="map-photo" />
         </div>

         <div className="name">
          <p>Alagoas</p>
         </div>
         <div className="photo">
          <img src={Alagoas} alt="Mapa do cooperativas de reciclagem do Alagoas" className="map-photo" />
         </div>

         <div className="name">
          <p>Amapá</p>
         </div>
         <div className="photo">
          <img src={Amapa} alt="Mapa do cooperativas de reciclagem do Amapá" className="map-photo" />
         </div>

         <div className="name">
          <p>Amazonas</p>
         </div>
         <div className="photo">
          <img src={Amazonas} alt="Mapa do cooperativas de reciclagem do Amazonas" className="map-photo" />
         </div>

         <div className="name">
          <p>Bahia</p>
         </div>
         <div className="photo">
          <img src={Bahia} alt="Mapa do cooperativas de reciclagem do Bahia" className="map-photo" />
         </div>

         <div className="name">
          <p>Ceara</p>
         </div>
         <div className="photo">
          <img src={Ceara} alt="Mapa do cooperativas de reciclagem do Ceará" className="map-photo" />
         </div>

         <div className="name">
          <p>Distrito Federal</p>
         </div>
         <div className="photo">
          <img src={DistritoFederal} alt="Mapa do cooperativas de reciclagem do Distrito Federal" className="map-photo" />
         </div>

         <div className="name">
          <p>Espírito Santo</p>
         </div>
         <div className="photo">
          <img src={EspiritoSanto} alt="Mapa do cooperativas de reciclagem do Espírito Santo" className="map-photo" />
         </div>

         <div className="name">
          <p>Goiás</p>
         </div>
         <div className="photo">
          <img src={Goias} alt="Mapa do cooperativas de reciclagem do Goiás" className="map-photo" />
         </div>

         <div className="name">
          <p>Maranhão</p>
         </div>
         <div className="photo">
          <img src={Maranhao} alt="Mapa do cooperativas de reciclagem do Maranhão" className="map-photo" />
         </div>

         <div className="name">
          <p>Mato Grosso do Sul</p>
         </div>
         <div className="photo">
          <img src={MatoGrossodoSul} alt="Mapa do cooperativas de reciclagem do Mato Grosso do Sul" className="map-photo" />
         </div>

         <div className="name">
          <p>Mato Grosso</p>
         </div>
         <div className="photo">
          <img src={MatoGrosso} alt="Mapa do cooperativas de reciclagem do Mato Grosso" className="map-photo" />
         </div>

         <div className="name">
          <p>Pará</p>
         </div>
         <div className="photo">
          <img src={Para} alt="Mapa do cooperativas de reciclagem do Pará" className="map-photo" />
         </div>

         <div className="name">
          <p>Paraiba</p>
         </div>
         <div className="photo">
          <img src={Paraiba} alt="Mapa do cooperativas de reciclagem do Paraiba" className="map-photo" />
         </div>

         <div className="name">
          <p>Paraná</p>
         </div>
         <div className="photo">
          <img src={Parana} alt="Mapa do cooperativas de reciclagem do Parana" className="map-photo" />
         </div>

         <div className="name">
          <p>Pernambuco</p>
         </div>
         <div className="photo">
          <img src={Pernambuco} alt="Mapa do cooperativas de reciclagem do Pernambuco" className="map-photo" />
         </div>

         <div className="name">
          <p>Piauí</p>
         </div>
         <div className="photo">
          <img src={Piaui} alt="Mapa do cooperativas de reciclagem do Piauí" className="map-photo" />
         </div>

         <div className="name">
          <p>Rio de Janeiro</p>
         </div>
         <div className="photo">
          <img src={RiodeJaneiro} alt="Mapa do cooperativas de reciclagem do Rio de Janeiro" className="map-photo" />
         </div>

         <div className="name">
          <p>Rio Grande do Norte</p>
         </div>
         <div className="photo">
          <img src={RioGrandedoNorte} alt="Mapa do cooperativas de reciclagem do Rio Grande do Norte" className="map-photo" />
         </div>

         <div className="name">
          <p>Rio Grande do Sul</p>
         </div>
         <div className="photo">
          <img src={RioGrandedoSul} alt="Mapa do cooperativas de reciclagem do Rio Grande do Sul" className="map-photo" />
         </div>

         <div className="name">
          <p>Rondonia</p>
         </div>
         <div className="photo">
          <img src={Rondonia} alt="Mapa do cooperativas de reciclagem do Rondonia" className="map-photo" />
         </div>

         <div className="name">
          <p>Roraima</p>
         </div>
         <div className="photo">
          <img src={Roraima} alt="Mapa do cooperativas de reciclagem do Roraima" className="map-photo" />
         </div>

         <div className="name">
          <p>Santa Catarina</p>
         </div>
         <div className="photo">
          <img src={SantaCatarina} alt="Mapa do cooperativas de reciclagem do Santa Catarina" className="map-photo" />
         </div>

         <div className="name">
          <p>São Paulo</p>
         </div>
         <div className="photo">
          <img src={SaoPaulo} alt="Mapa do cooperativas de reciclagem do São Paulo" className="map-photo" />
         </div>

         <div className="name">
          <p>Sergipe</p>
         </div>
         <div className="photo">
          <img src={Sergipe} alt="Mapa do cooperativas de reciclagem do Sergipe" className="map-photo" />
         </div>

         <div className="name">
          <p>Tocantins</p>
         </div>
         <div className="photo">
          <img src={Tocantins} alt="Mapa do cooperativas de reciclagem do Tocantins" className="map-photo" />
         </div>

        </div>
       </div>
      </div>

     </div>
    </div>
  )
}