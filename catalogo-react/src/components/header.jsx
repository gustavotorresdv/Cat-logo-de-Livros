import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Catálogo de Livros</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        Tema: {theme === "light" ? "Claro" : "Escuro"}
      </button>
    </header>
  );
}
