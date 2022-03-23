import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const UserActivities = () => {
  const historyData = useSelector((state) => state.edu.historyData);
  Math.max();
  const findDate = async () => {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    const date = d.toLocaleDateString();
    const restData = await historyData.filter((item) => item.date === date);
    console.log(restData);
  };
  findDate();
  console.log(historyData);

  const data = [
    {
      name: "SAT",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "SUN",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "MON",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "TUE",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "WED",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "THU",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "FRI",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h1>User Activity</h1>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={"name"} stroke="#5550bd" />
          <Line type={"monotone"} dataKey={"uv"} stroke="#e250bd" />
          <Line type={"monotone"} dataKey={"pv"} stroke="#b350bd" />
          <Line type={"monotone"} dataKey={"amt"} stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid strokeDasharray={"5 5"} stroke="#e0dfdf" />

          <YAxis dataKey={"pv"} stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivities;
