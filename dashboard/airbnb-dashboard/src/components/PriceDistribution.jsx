import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PriceDistribution({ data }) {
  return (
    <div className="price-chart">
      <ResponsiveContainer width="100%" height={380}>
        <BarChart
          data={data}
        >
          <CartesianGrid vertical={false} stroke="#e0e0da" strokeDasharray="3 3" />

          <XAxis dataKey="price" tickFormatter={(value) => `$${value}`}/>

          <YAxis/>

          <Tooltip
            formatter={(value) => [
              value.toLocaleString(),
              "Listings"
            ]}
            labelFormatter={(value) => `Price: $${value}`}
          />

          <Bar
            dataKey="count"
            fill="#1f4e8c"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceDistribution;