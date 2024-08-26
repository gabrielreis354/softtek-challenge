import "./Login.scss";

import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card.jsx";
import Button from "../../components/Button/Button.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aviso, setAviso] = useState("");

  const limpar = useCallback(() => {
    setEmail("");
    setPassword("");
    setAviso("");
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault(); // Evita que a página seja recarregada ao clicar no botão
      if (email.includes("@") && password.length > 0) {
        limpar();
        navigate("/dashboard");
      } else {
        setAviso("Preencha todos os campos para continuar!");
      }
    },
    [email, password, limpar, navigate]
  );

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <div className="login">
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="login-background">
            <h2>Login</h2>
            <div className="login-inputs">
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange} // Atualiza o state email com o novo valor do input
              />
              <input
                id="pass"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange} // Atualiza o state password com o novo valor do input
              />

              {aviso && (
                <div id="aviso" aria-live="polite" className="aviso">
                  {aviso}
                </div>
              )}
            </div>

            <Button type="submit">Entrar</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
