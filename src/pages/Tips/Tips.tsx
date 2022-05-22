import "./tips.css";
import Navbar from "../../components/Navbar/Navbar";

export function Tips(){
 return (
  <div className="container">
   <Navbar />
   <div className="tips-container">
    <div className="top">
     <div className="title">
      <p><span className="key-word">Dicas</span> de reciclagem</p>
      </div>
    </div>
    <div className="mid">
     <div className="items-grid">
       <div className="wrapper">

       <a href="/tips/milk"><div className="element">Caixa de leite</div></a>

       </div>
      </div>
    </div>
   </div>
  </div>
 );
 }