export default function Statistics({ good, neutral, bad }) {
  const total = good + bad + neutral;
  const persents = Math.floor((good / total) * 100);
  console.log(persents);
  return (
    <div className="container">
      <h1>Statistics</h1>
      <ul className="list">
        <li className="item">Good: {good}</li>
        <li className="item">Neutral: {neutral}</li>
        <li className="item">Bad: {bad}</li>
        <li className="item">Total: {total}</li>
        <li className="item">
          Positive feedback: {total === 0 ? 0 : persents}%
        </li>
      </ul>
    </div>
  );
}
