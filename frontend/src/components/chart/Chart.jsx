import React from "react";
import "./Chart.scss";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



function Chart() {
    let datas = useSelector((state) => state.graphData)
    let filterd = useSelector((state) => state.filterd)
    let data = filterd ? filterd : datas.dataChart
  return (
    <div className="chartContainer">
      { Array.isArray(data) && <ResponsiveContainer width="80%" height={500} className="chart">
        <LineChart
          width={730} 
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" allowDuplicatedCategory={false}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="acv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>}
    </div>
  );
}

export default Chart;
