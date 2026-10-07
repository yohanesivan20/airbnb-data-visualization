import Header from "./components/Header";
import Metric from "./components/Metric";
import PriceDistribution from "./components/PriceDistribution";
import RoomTypeChart from "./components/RoomTypeChart";
import NeighbourhoodChart from "./components/NeighbourhoodChart";
import Footer from "./components/Footer";
import dashboardData from "./data/airbnb_dashboard.json";
import "./App.css";

function App() {
  const { overview, price_distribution, room_type, neighbourhood } = dashboardData;

  return (
    <div className="page">
      <Header />

      <main>
        <section className="section">
          <div className="section-heading">
            <span>01</span>
            <h2>OVERVIEW</h2>
          </div>

          <div className="metrics">
            <Metric
              label="Total Listings"
              value={overview.total_listings.toLocaleString()}
            />

            <Metric
              label="Average Price"
              value={`$${overview.average_price.toLocaleString()}`}
            />

            <Metric
              label="Median Price"
              value={`$${overview.median_price.toLocaleString()}`}
            />

            <Metric
              label="Neighbourhoods"
              value={overview.neighbourhoods.toLocaleString()}
            />
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span>02</span>
            <div>
              <h2>PRICE DISTRIBUTION</h2>
              <p>
                Distribution of Airbnb listing prices across the dataset.
              </p>
            </div>
          </div>

          <PriceDistribution data={price_distribution} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span>03</span>
            <div>
              <h2>PRICING BY ROOM TYPE</h2>
              <p>
                Average and median prices across different room types.
              </p>
            </div>
          </div>

          <RoomTypeChart data={room_type} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span>04</span>
            <div>
              <h2>NEIGHBOURHOOD PRICING</h2>
              <p>
                Highest average prices among neighbourhoods with at least 50
                listings.
              </p>
            </div>
          </div>

          <NeighbourhoodChart data={neighbourhood} />
        </section>

        <section className="section findings">
          <div className="section-heading">
            <span>05</span>
            <div>
              <h2>KEY FINDINGS</h2>
              <p>Summary of the main observations from the analysis.</p>
            </div>
          </div>

          <div className="finding-grid">
            <article>
              <span>01</span>
              <h3>Room type matters</h3>
              <p>
                Entire homes and apartments command higher average prices
                compared with other room types.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Location matters</h3>
              <p>
                Average listing prices vary considerably between
                neighbourhoods.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Price varies widely</h3>
              <p>
                Airbnb listings cover a broad range of prices across the
                dataset.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;