import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Manutencao from "../../assets/images/manutencao.jpg";
import "./score.css"


export function Score() {
  return (
   <div className="container">
    <Navbar />
    <div className="score">
    <img src={Manutencao} alt="Em manutenção" className="manutencao"/>
    <div className="score-text"><p>Página de pontuação de coletas dos usuários em construção.</p></div>
    </div>
   </div>
  )
}