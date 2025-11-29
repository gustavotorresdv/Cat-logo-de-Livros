export default function BookList({ books, onRemove }) {
  if (books.length === 0) return <p>Nenhum livro encontrado.</p>;

  return (
    <div className="book-list">
      {books.map(b => (
        <div className="book-item" key={b.id}>
          <span>
            • {b.title} — {b.author} ({b.year})
          </span>
          <button className="remove-btn" onClick={() => onRemove(b.id)}>
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}
