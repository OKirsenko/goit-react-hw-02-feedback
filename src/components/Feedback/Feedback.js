export default function Feedback({ onGood, onNeutral, onBad }) {
  return (
    <div className="container">
      <h1 className="header">Please leave feedback</h1>
      <div className="btn_container">
        <button className="btn" onClick={onGood}>
          Good
        </button>
        <button className="btn" onClick={onNeutral}>
          Neutral
        </button>
        <button className="btn" onClick={onBad}>
          Bad
        </button>
      </div>
    </div>
  );
}
