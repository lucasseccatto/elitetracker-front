import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./styles.module.css";

import { useEffect } from "react";

import useUser from "../../hooks/use-user";

function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getUserInfo } = useUser();

  async function handleAuth() {
    await getUserInfo(String(searchParams.get("code")));

    navigate("/");
  }

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Carregando...</h1>
    </div>
  );
}

export default Auth;
