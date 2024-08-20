import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const limpar = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página seja recarregada ao clicar no botão
    if (email.includes("@") && password.length > 0) {
      limpar();        
      navigator("/About");
    } else {
      document.querySelector("#aviso").innerHTML = "<p>Preencha todos os campos para continuar !</p>"
    }
  };

  return (
    <div className="login">
      <form>
        <div className="login-background">
          <h2>Login</h2>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o state email com o novo valor do input
          />
          <input
            id="pass"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Atualiza o state password com o novo valor do input
          />
          <div id="aviso"></div>
          <button onClick={handleSubmit} className="btn">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
