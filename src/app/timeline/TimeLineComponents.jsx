"use client";
import React, { useState } from "react";
import TimeLineList from "./TimeLineList";

const TimeLineComponents = () => {
  const [selectedValue, setSelectedValue] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSelectorChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleSearch = (e)=>{
    setSearchKeyword(e.target.value);
  }
  return (
    <>
      <div className="lg:flex md:flex block justify-between items-center mt-5">

        <h1 className="text-[48px] font-bold">Timeline</h1>
          <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" onInput={handleSearch} required placeholder="Search by name or type" />
        </label>

        <select
          onChange={handleSelectorChange}
          defaultValue="Pick a color"
          className="select max-w-42.5 mt-2 md:mt-0 sm:mt-0"
        >
          <option disabled={true}>short by</option>
          <option>All</option>
          <option>Call</option>
          <option>Video</option>
          <option>Message</option>
          <option>Oldest</option>
          <option>latest</option>
        </select>
      </div>

      <div className="timeline_listcontainer">
        <ul className="list rounded-box mt-5">
          <TimeLineList selectedValue={selectedValue} searchKeyword={searchKeyword} />
        </ul>
      </div>
    </>
  );
};

export default TimeLineComponents;
