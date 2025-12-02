import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { useTheme } from "../context/ThemeContext";
import "../App.css";
import Footerss from "../components/footer";

export default function MainLayout() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footerss />
    </div>
  );
}
    