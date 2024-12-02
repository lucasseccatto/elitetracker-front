import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { localStorageKey } from "../hooks/use-user";
import SideBar from "../components/sidebar";
import { AppContainer } from "../components/app-container";

type PrivateRouteProps = {
  component: ReactNode;
};
export function PrivateRoute({ component }: PrivateRouteProps) {
  const userData = localStorage.getItem(localStorageKey);

  if (!userData) {
    return <Navigate to="/entrar" />;
  }

  return (
    <>
      <AppContainer>
        <SideBar />
        {component}
      </AppContainer>
    </>
  );
}
