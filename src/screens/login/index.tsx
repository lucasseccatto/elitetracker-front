import { GithubLogo } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import Button from "../../components/button";

import { api } from "../../services/api";

function Login() {
  async function handleAuth() {
    const { data } = await api.get("/auth");

    window.location.href = data.redirectUrl;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Entre com</h1>
        <Button onClick={handleAuth}>
          <GithubLogo />
          GitHub
        </Button>
        <p>
          Ao entrar, eu concordo com os termos de serviço e a politica de
          privacidade.
        </p>
      </div>
    </div>
  );
}

export default Login;
