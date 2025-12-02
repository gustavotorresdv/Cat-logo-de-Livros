import { useTheme } from "../context/ThemeContext";
import "../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`app-header ${theme}`}>
      <Link to="/" style={{textDecoration: "none",color: "blue"}}>
       <h1>Catálogo de Livros</h1>
     </Link>
      <button className="theme-btn" onClick={toggleTheme}>
        Tema: {theme === "light" ? "Claro" : "Escuro"}
      </button>
    </header>
  );
}
