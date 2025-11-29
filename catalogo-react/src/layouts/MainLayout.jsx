import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { useTheme } from "../context/ThemeContext";
import "../App.css";

export default function MainLayout() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer style={{ textAlign: "center", padding: "20px", marginTop: "30px" }}>
        © Catálogo de Livros — 2ª Unidade
      </footer>
    </div>
  );
}
    