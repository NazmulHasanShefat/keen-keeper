"use client";
import React, { useState } from "react";
import TimeLineList from "./TimeLineList";

const TimeLineComponents = () => {
  const [selectedValue, setSelectedValue] = useState("All");

  const handleSelectorChange = (e)=>{
    setSelectedValue(e.target.value)
  }
  return (
    <>
      <div className="lg:flex md:flex block justify-between items-center mt-5">
        <h1 className="text-[48px] font-bold">Timeline</h1>
        <select
          onChange={handleSelectorChange}
          defaultValue="Pick a color"
          className="select"
        >
          <option disabled={true}>short by</option>
          <option>All</option>
          <option>Call</option>
          <option>Video</option>
          <option>Message</option>
        </select>
      </div>

      <div className="timeline_listcontainer">
        <ul className="list rounded-box mt-5">
          <TimeLineList selectedValue={selectedValue}/>
        </ul>
      </div>
    </>
  );
};

export default TimeLineComponents;
