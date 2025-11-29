import { useEffect, useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Counters from "./components/Counters";
import { useTheme } from "./context/ThemeContext";
import { useLocalStorage } from "./hooks/useLocalStorage"; 
import "./App.css";

export default function App() {
  const { theme } = useTheme();

  const [books, setBooks] = useLocalStorage("books", []); 
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 
  useEffect(() => {
    if (books.length > 0) {
      setLoading(false);
      return; 
    }

    fetch("/books.json")
      .then(res => {
        if (!res.ok) throw new Error("Falha ao carregar dados");
        return res.json();
      })
      .then(data => {
        setBooks(data); 
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); 

  
  const filtered = books.filter(b =>
    `${b.title} ${b.author}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function handleAdd(book) {
    setBooks(prev => [...prev, book]);
  }

  function handleRemove(id) {
    setBooks(prev => prev.filter(b => b.id !== id));
  }

  return (
    <div className={`app ${theme}`}>
      <Header />

      <SearchBar search={search} setSearch={setSearch} />

      <BookForm onAdd={handleAdd} />

      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error}</p>}

      {!loading && !error && (
        <BookList books={filtered} onRemove={handleRemove} />
      )}

      <Counters total={books.length} filtered={filtered.length} />
    </div>
  );
}
