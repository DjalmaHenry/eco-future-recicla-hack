import './home.css';
import { MdRecycling, MdOutlineMap } from "react-icons/md";
import Navbar from '../../components/Navbar/Navbar';

export function Home() {

    return(
        <div className="container">
            <Navbar />
            <div className="home-container">
                <div className="home-elements">
                    <div className="top">
                        <div className="top-text">
                            <p>Olá!
                            <br />
                            <span className="name">Name</span>
                            </p>
                        </div>
                    </div>
                    <div className="mid">
                        <div className="mid-text">
                            <p>Bem vindo ao
                            <br />
                            <span className="app-name">Eco Future</span>, seu
                            <br />
                            app de reciclagem!</p>
                        </div>
                        <div className="mid-buttons">
                            <div className="button"><MdRecycling /> Dicas de reciclagem</div>
                            <div className="button"><MdOutlineMap /> Mapa</div>
                            <div className="button">Nada</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    )
}