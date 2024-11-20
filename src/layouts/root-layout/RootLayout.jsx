import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
