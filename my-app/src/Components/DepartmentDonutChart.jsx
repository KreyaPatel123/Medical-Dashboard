import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dummy data
const data = [
  { name: "Neurology", value: 400 },
  { name: "Dental Care", value: 300 },
  { name: "Gynecology", value: 300 },
  { name: "Orthopedic", value: 200 },
];

// Match colors from image
const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"]; // blue, green, yellow, red

const renderCustomizedLabel = () => {
  return (
    <foreignObject x="40%" y="40%" width="20%" height="20%">
      <div className="flex justify-center items-center w-full h-full text-gray-500 text-xl">
        🧍
      </div>
    </foreignObject>
  );
};

export default function DepartmentDonutChart() {
  return (
    <div className="w-full p-4 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-center mb-4">Patient by Department</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={2}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            {renderCustomizedLabel()}
          </Pie>
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            formatter={(value, entry, index) => (
              <span style={{ fontSize: "14px", marginLeft: "4px" }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
