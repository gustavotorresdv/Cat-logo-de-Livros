import { Link } from "react-router-dom";

export default function BookItem({ book, onRemove }) {
  return (
    <li className="book-item">
      <Link to={`/livro/${book.id}`}>
        {book.title} — {book.author} ({book.year})
      </Link>

      <button onClick={() => onRemove(book.id)}>
        Remover
      </button>
    </li>
  );
}
