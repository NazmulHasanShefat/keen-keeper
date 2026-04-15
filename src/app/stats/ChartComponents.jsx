"use client";
import { FriendsContext } from "@/context/allContext";
import Link from "next/link";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const ChartComponents = () => {
    const { friendsConnectionStatus } = useContext(FriendsContext);
    console.log(friendsConnectionStatus)
    const TotalCalls = friendsConnectionStatus.filter((friend)=> friend.communicationType === "Call");
    const TotalVideo = friendsConnectionStatus.filter((friend)=> friend.communicationType === "Video");
    const TotalMessage = friendsConnectionStatus.filter((friend)=> friend.communicationType === "Message");
  const data = [
    { name: "Call", value: TotalCalls.length, fill: "#244d3f" },
    { name: "Text", value: TotalMessage.length, fill: "#7f37f5" },
    { name: "Video", value: TotalVideo.length, fill: "#37a163" },
  ];
  return (
    !TotalCalls && !TotalMessage && !TotalVideo || TotalCalls.length === 0 && TotalMessage.length === 0 && TotalVideo.length === 0 ?
    <div className="min-h-50 flex-col flex justify-center items-center">
     <h1 className="text-4xl font-bold">404</h1>
     <h1>No data found</h1>
      <Link href={"/"}  
          className="py-2 mt-5 rounded-xl hover:scale-105 transition-[scale] duration-200 cursor-pointer px-4 bg-green-700 text-white text-base"
        >
          Go to home page
        </Link>
    </div>:
     <div className="chart_section w-full max-w-[1290.1px] mx-auto">
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
    </div>
  );
};

export default ChartComponents;