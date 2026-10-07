function Metric({ label, value }) {
  return (
    <div className="metric">
      <p>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

export default Metric;