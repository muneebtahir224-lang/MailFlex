function ResultCard({ title, value }) {
  return (
    <div className="result-card">
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default ResultCard;