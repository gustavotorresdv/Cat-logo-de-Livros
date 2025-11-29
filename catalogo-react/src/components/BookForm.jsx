export default function BookForm({ onAdd }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const title = form.get("title").trim();
    const author = form.get("author").trim();
    const year = form.get("year").trim();

    if (!title || !author || !year) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      year
    };

    onAdd(newBook);
    e.target.reset();
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h3>Novo Livro</h3>
      <input name="title" placeholder="Título" />
      <input name="author" placeholder="Autor" />
      <input name="year" placeholder="Ano" />
      <button>Adicionar</button>
    </form>
  );
}
