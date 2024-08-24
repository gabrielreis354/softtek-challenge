import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import Card from "../elements/Card";
import Button from "../elements/Button";

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
      navigator("/dashboard");
    } else {
      document.querySelector("#aviso").innerHTML = "<p>Preencha todos os campos para continuar !</p>"
    }
  };

  return (
    <div className="login">
      <Card>
      <form>
        <div className="login-background">
          <h2>Login</h2>
          <div className="login-inputs">
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

          </div>


          <Button onClick={handleSubmit}>
              Entrar
          </Button>

        </div>
      </form>
      </Card>

    </div>
  );
}
