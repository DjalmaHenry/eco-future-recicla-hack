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
import MinasGerais from "../../assets/images/estados/MinasGerais.png";
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
       <span className="key-word">Locais de coleta</span>
       <p className="key-word-p">Clique no mapa para visualizar melhor.</p>
       </div>
      </div>
      <div className="mid">
       <div className="maps">
        <div className="map">
         <div className="name-map">
          <p>Acre</p>
         </div>
         <div className="photo">
           <a className="photo" href="https://www.google.com/maps/search/acre+cooperativa+de+reciclagem/@-9.1252147,-71.4245681,8z/data=!3m1!4b1" target="_blank">
          <img src={Acre} alt="Mapa do cooperativas de reciclagem do Acre" className="map-photo" />
            </a>
         </div>

         <div className="name-map">
          <p>Alagoas</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Alagoas+cooperativa+de+reciclagem/@-9.342116,-37.4580892,8z" target="_blank">
          <img src={Alagoas} alt="Mapa do cooperativas de reciclagem do Alagoas" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Amapá</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/amapá+cooperativa+de+reciclagem/@0.2063863,-51.7493841,8.5z" target="_blank">
          <img src={Amapa} alt="Mapa do cooperativas de reciclagem do Amapá" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Amazonas</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Amazonas+cooperativa+de+reciclagem/@-5.291265,-63.5112427,6z" target="_blank">
          <img src={Amazonas} alt="Mapa do cooperativas de reciclagem do Amazonas" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Bahia</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Bahia+cooperativa+de+reciclagem/@-13.6138772,-42.4123774,7z" target="_blank">
          <img src={Bahia} alt="Mapa do cooperativas de reciclagem do Bahia" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Ceará</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Ceará+cooperativa+de+reciclagem/@-5.3182145,-40.4593364,8z/data=!3m1!4b1" target="_blank">
          <img src={Ceara} alt="Mapa do cooperativas de reciclagem do Ceará" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Distrito Federal</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Distrito+Federal+cooperativa+de+reciclagem/@-15.7217287,-48.0073979,12z/data=!3m1!4b1" target="_blank">
          <img src={DistritoFederal} alt="Mapa do cooperativas de reciclagem do Distrito Federal" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Espírito Santo</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Espírito+Santo+cooperativa+de+reciclagem/@-19.9002285,-40.3335081,8.79z" target="_blank">
          <img src={EspiritoSanto} alt="Mapa do cooperativas de reciclagem do Espírito Santo" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Goiás</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Goiás+cooperativa+de+reciclagem/@-15.9118758,-51.8217296,7z/data=!3m1!4b1" target="_blank">
          <img src={Goias} alt="Mapa do cooperativas de reciclagem do Goiás" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Maranhão</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Maranhão+cooperativa+de+reciclagem/@-5.5223536,-47.1681088,7z" target="_blank">
          <img src={Maranhao} alt="Mapa do cooperativas de reciclagem do Maranhão" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Mato Grosso</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Mato+Grosso+cooperativa+de+reciclagem/@-13.993597,-60.1168697,6z" target="_blank">
          <img src={MatoGrosso} alt="Mapa do cooperativas de reciclagem do Mato Grosso" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Mato Grosso do Sul</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Mato+Grosso+do+Sul+cooperativa+de+reciclagem/@-20.5735467,-56.7894389,7z/data=!3m1!4b1" target="_blank">
          <img src={MatoGrossodoSul} alt="Mapa do cooperativas de reciclagem do Mato Grosso do Sul" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Minas Gerais</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Minas+Gerais+cooperativa+de+reciclagem/@-19.151638,-46.695494,7z" target="_blank">
          <img src={MinasGerais} alt="Mapa do cooperativas de reciclagem de Minas Gerais" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Paraíba</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Paraíba+cooperativa+de+reciclagem/@-7.3824418,-38.0346009,7z" target="_blank">
          <img src={Paraiba} alt="Mapa do cooperativas de reciclagem do Paraiba" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Paraná</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Paraná+cooperativa+de+reciclagem/@-26.1536097,-57.2323275,5.75z" target="_blank">
          <img src={Parana} alt="Mapa do cooperativas de reciclagem do Parana" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Pernambuco</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Pernambuco+cooperativa+de+reciclagem/@-8.0119486,-34.9604195,12z/data=!3m1!4b1" target="_blank">
          <img src={Pernambuco} alt="Mapa do cooperativas de reciclagem do Pernambuco" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Piauí</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Piauí+cooperativa+de+reciclagem/@-6.4433148,-44.9936075,7z" target="_blank">
          <img src={Piaui} alt="Mapa do cooperativas de reciclagem do Piauí" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Rio de Janeiro</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Rio+de+Janeiro+cooperativa+de+reciclagem/@-22.9300741,-43.69433,10z" target="_blank">
          <img src={RiodeJaneiro} alt="Mapa do cooperativas de reciclagem do Rio de Janeiro" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Rio Grande do Norte</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Rio+Grande+do+Norte+cooperativa+de+reciclagem/@-6.2038724,-37.5296633,7.75z" target="_blank">
          <img src={RioGrandedoNorte} alt="Mapa do cooperativas de reciclagem do Rio Grande do Norte" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Rio Grande do Sul</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Rio+Grande+do+Sul+cooperativa+de+reciclagem/@-29.7594408,-56.3582107,6.25z" target="_blank">
          <img src={RioGrandedoSul} alt="Mapa do cooperativas de reciclagem do Rio Grande do Sul" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Rondonia</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Rondônia+cooperativa+de+reciclagem/@-11.5028531,-65.7663236,6z" target="_blank">
          <img src={Rondonia} alt="Mapa do cooperativas de reciclagem do Rondonia" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Roraima</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Roraima+cooperativa+de+reciclagem/@2.3998323,-63.5314397,7z" target="_blank">
          <img src={Roraima} alt="Mapa do cooperativas de reciclagem do Roraima" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Santa Catarina</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Santa+Catarina+cooperativa+de+reciclagem/@-27.3950685,-54.681546,6.25z" target="_blank">
          <img src={SantaCatarina} alt="Mapa do cooperativas de reciclagem do Santa Catarina" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>São Paulo</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/São+Paulo+cooperativa+de+reciclagem/@-23.6797698,-46.8754828,10z/data=!3m1!4b1" target="_blank">
          <img src={SaoPaulo} alt="Mapa do cooperativas de reciclagem do São Paulo" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Sergipe</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Sergipe+cooperativa+de+reciclagem/@-10.6843684,-38.4362094,8z" target="_blank">
          <img src={Sergipe} alt="Mapa do cooperativas de reciclagem do Sergipe" className="map-photo" />
          </a>
         </div>

         <div className="name-map">
          <p>Tocantins</p>
         </div>
         <div className="photo">
         <a className="photo" href="https://www.google.com/maps/search/Tocantins+cooperativa+de+reciclagem/@-12.5816309,-49.2939959,6.75z" target="_blank">
          <img src={Tocantins} alt="Mapa do cooperativas de reciclagem do Tocantins" className="map-photo" />
          </a>
         </div>

        </div>
       </div>
      </div>

     </div>
    </div>
  )
}