import { useParams, Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../App.css";
import { useTheme } from "../context/ThemeContext";

export default function LivroDetalhe() {
  const { theme } = useTheme();
  const { id } = useParams();
  const [books] = useLocalStorage("books", []);

  const book = books.find(b => b.id == id);

  if (!book) {
    return <p>Livro não encontrado.</p>;
  }

  return (
    <div className={`app ${theme}`}>
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Ano:</strong> {book.year}</p>

      {/* Botão de voltar */}
      <Link to="/" className="voltar-btn">
         Voltar ao Catálogo
      </Link>
    </div>
  );
}
