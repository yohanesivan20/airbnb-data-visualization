import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function NeighbourhoodChart({ data }) {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={420}>
        <BarChart
          data={[...data].reverse()}
          layout="vertical"
          margin={{ left: 30, right: 30 }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />

          <XAxis
            type="number"
            tickFormatter={(value) => `$${value}`}
          />

          <YAxis
            type="category"
            dataKey="neighbourhood"
            width={120}
          />

          <Tooltip
            formatter={(value) => [
              `$${value.toLocaleString()}`,
              "Average Price"
            ]}
          />

          <Bar
            dataKey="average_price"
            fill="#1F4E8C"
            radius={[0, 2, 2, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default NeighbourhoodChart;