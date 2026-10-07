function Header() {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">DATA ANALYSIS PORTFOLIO · IVAN DANASUTA · USING REACT JS</p>
        <h1>AIRBNB LISTING ANALYSIS</h1>
        <p className="subtitle">
          New York City · 102,599 listings
        </p>
      </div>

      <div className="header-meta">
        <span>Dataset</span>
        <strong>Airbnb Kaggle Open Data</strong>
      </div>
    </header>
  );
}

export default Header;