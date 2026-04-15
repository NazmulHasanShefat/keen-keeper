"use client"
import React from "react";
import TimeLineList from "./TimeLineList";

const timelinePage = () => {
 const handleSelectorChange = (e)=>{
  console.log(e.target.value)
 }
  return (
    <section title="timeline" className="w-full max-w-[1280.1px] mx-auto px-5">
      <div className="lg:flex md:flex block justify-between items-center mt-5">
        <h1 className="text-[48px] font-bold">Timeline</h1>
         <select onChange={handleSelectorChange} defaultValue="Pick a color" className="select">
          <option disabled={true}>short by</option>
          <option>Call</option>
          <option>Video</option>
          <option>Message</option>
          <option>All</option>
        </select>
      </div>

      <div className="timeline_listcontainer">
        <ul className="list rounded-box mt-5">
         <TimeLineList />
        </ul>
      </div>
    </section>
  );
};

export default timelinePage;
