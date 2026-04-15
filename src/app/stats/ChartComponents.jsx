"use client";
import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const ChartComponents = () => {
  const data = [
    { name: "Call", value: 2, fill: "#244d3f" }, // আপনি চাইলে আলাদা কালার দিতে পারেন
    { name: "Text", value: 3, fill: "#7f37f5" },
    { name: "Video", value: 5, fill: "#37a163" },
  ];
  return (
    <section className="chart_section w-full max-w-[1290.1px] mx-auto">
      <div className="flex flex-col items-center mt-10">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "300px",
          maxHeight: "40vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Tooltip />
        <Legend/>
      </PieChart>
      </div>
    </section>
  );
};

export default ChartComponents;