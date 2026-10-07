import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function RoomTypeChart({ data }) {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={380}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 20, right: 30 }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />

          <XAxis
            type="number"
            tickFormatter={(value) => `$${value}`}
          />

          <YAxis
            type="category"
            dataKey="room type"
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

export default RoomTypeChart;