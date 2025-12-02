import { useParams, Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../App.css";
import { useTheme } from "../context/ThemeContext";

export default function LivroDetalhe() {
  const { theme } = useTheme();
  const { id } = useParams();
  const [books] = useLocalStorage("books", []);

  const book = books.find((b) => b.id == id);

  if (!book) {
    return <p>Livro não encontrado.</p>;
  }

  return (
    <div className={`app ${theme}`} style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{book.title}</h2>

        <div style={styles.infoBox}>
          <p style={styles.info}><strong>Autor:</strong> {book.author}</p>
          <p style={styles.info}><strong>Ano de Publicação:</strong> {book.year}</p>
          <p style={styles.info}><strong>ID:</strong> {book.id}</p>
        </div>

        <Link to="/catalogo" className="voltar-btn" style={styles.button}>
          Voltar ao Catálogo
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(8px)",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    width: "450px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "28px",
  },
  infoBox: {
    background: "rgba(255,255,255,0.08)",
    padding: "18px",
    borderRadius: "10px",
    marginBottom: "25px",
    textAlign: "left",
    lineHeight: "1.8",
  },
  info: {
    fontSize: "18px",
  },
  button: {
    marginTop: "18px",
    display: "inline-block",
  },
};
