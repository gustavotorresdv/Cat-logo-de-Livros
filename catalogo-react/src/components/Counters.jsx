export default function Counters({ total, filtered }) {
  return (
    <div className="counters">
      <p>Total: {total} | Filtrados: {filtered}</p>
    </div>
  );
}
