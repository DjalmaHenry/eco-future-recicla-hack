import "./home.css";
import { MdRecycling, MdOutlineMap } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../hooks/useAuth";

export function Home() {
  const { user } = useAuth();

  return (
    <div className="container">
      <Navbar />
      <div className="home-container">
        <div className="home-elements">
          <div className="top">
            <div className="top-text">
              <p>
                Olá!
                <br />
                <span className="name">{user?.name}</span>
              </p>
            </div>
          </div>
          <div className="mid">
            <div className="mid-text">
              <p>
                Bem vindo ao
                <br />
                Eco Future, seu
                <br />
                app de reciclagem!
              </p>
            </div>
            <div className="mid-buttons">
              <a href="/tips">
                <div className="button">
                  <MdRecycling />
                  <span>Itens de reciclagem</span>
                </div>
              </a>
              <a href="/maps">
                <div className="button">
                  <MdOutlineMap />
                  <span>Locais de coleta</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
