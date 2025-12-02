
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleEnterCatalog() {
    navigate("/catalogo"); // Navegação programática obrigatória
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}> Bem-vindo ao Catálogo Digital do Pais de Adilsandia</h1>
      <p style={styles.subtitle}>
        Explore nosso acervo de livros e veja detalhes de cada obra.
      </p>

      <button style={styles.button} onClick={handleEnterCatalog}>
        Entrar no Catálogo
      </button>
    </div>
  );
}

// Estilos simples só para visualização
const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 22px",
    backgroundColor: "#4b6bfb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
