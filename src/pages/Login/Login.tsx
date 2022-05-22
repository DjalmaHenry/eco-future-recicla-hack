import "./login.css";
import googleIconImg from "../../assets/images/google-icon.svg";
import ecoFutureImg from "../../assets/images/LogomarcaBranca.png";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/home");
  }

  return (
    <div className="container-login">
      <aside>
        {/* <img className="img-aside" alt="Ilustração simbolizando perguntas e respostas" /> */}
        <p className="p-aside">
          Preserve o meio ambiente, descarte seu lixo de forma correta ouvindo
          de quem entende!
        </p>
        <strong className="strong-aside">O que fazer? Como fazer?</strong>
        <p className="p-aside">Descubra e comece agora com a Eco Future.</p>
      </aside>
      <main>
        <div className="main-content">
            <img src={ecoFutureImg} alt="Eco Future" className="img-login" />
          <div className="show-mobile">
            <strong className="strong-aside">O que reciclar? Como fazer?</strong>
            <p className="p-aside">Descubra e comece agora com a Eco Future.</p>
          </div>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            <span>Entrar com o Google</span>
          </button>
        </div>
      </main>
    </div>
  );
}
