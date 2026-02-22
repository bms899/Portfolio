import { useState } from "react";
import "../styles/Login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    alert(`Email: ${email}`);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Freight Panels</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
          
          <button id="Cad" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}