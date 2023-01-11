import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import "./shop/Analytics.css"

const Analytics = () => {
  const data = [
    { name: "Tickets Purchased", users: 2000000000 },
    { name: "Tickets Pending", users: 1500000000 },
    { name: "Tickets Reserved", users: 1000000000 },
  ];

  return (
    <div className="BackGround" style={{ textAlign: "center" }}>
      <h1>Tickets Analytics</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#A62D12"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#A62D12" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
