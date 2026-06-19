import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function CarbonPieChart({ latest }) {
  const data = [
    {
      name: "Transportation",
      value: Number(latest.transport),
    },
    {
      name: "Electricity",
      value: Number(latest.electricity),
    },
    {
      name: "Food",
      value: Number(latest.food),
    },
  ];

  const COLORS = [
    "#3B82F6",
    "#FACC15",
    "#EF4444",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6">
        🥧 Emission Sources
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CarbonPieChart;