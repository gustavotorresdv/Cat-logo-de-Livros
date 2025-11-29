import { useEffect, useRef } from "react";

export default function SearchBar({ search, setSearch }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="search">
      <label>Buscar: </label>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Título ou Autor..."
      />
    </div>
  );
}
