import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

function BarChartDashboard({ budgetList }) {
  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-bold text-lg mb-5">Activity</h2>
      <BarChart width={500} height={300} data={budgetList} margin={{ top: 7 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalSpend" stackId="a" fill="#8884d8" />
        <Bar dataKey="amount" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default BarChartDashboard;