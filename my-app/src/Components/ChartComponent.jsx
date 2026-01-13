import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", male: 20, female: 15 },
  { month: "Feb", male: 30, female: 20 },
  { month: "Mar", male: 35, female: 25 },
  { month: "Apr", male: 45, female: 25 },
  { month: "May", male: 25, female: 10 },
  { month: "Jun", male: 40, female: 30 },
  { month: "Jul", male: 40, female: 30 },
  { month: "Aug", male: 10, female: 25 },
  { month: "Sep", male: 25, female: 15 },
  { month: "Oct", male: 20, female: 15 },
  { month: "Nov", male: 35, female: 25 },
  { month: "Dec", male: 30, female: 30 },
];

export default function PatientVisitChart() {
  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold mb-4">Patient Visit by Gender</h2>

      <div className="flex items-center gap-6 mb-2">
        <div className="flex items-center gap-1 text-sm">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-900"></span>
          Male 75%
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="inline-block w-3 h-3 rounded-full bg-cyan-400"></span>
          Female 25%
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barCategoryGap={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="male" stackId="a" fill="#1e3a8a" name="Male" />
          <Bar dataKey="female" stackId="a" fill="#06b6d4" name="Female" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
