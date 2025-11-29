export default function BookItem({ book, onRemove }) {
  return (
    <li className="book-item">
      {book.title} — {book.author} ({book.year})
      <button onClick={() => onRemove(book.id)}>Remover</button>
    </li>
  );
}
