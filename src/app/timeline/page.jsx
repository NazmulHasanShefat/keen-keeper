import { MessageSquareMore } from "lucide-react";
import React from "react";
import TimeLineList from "./TimeLineList";

const timelinePage = () => {
  return (
    <section title="timeline" className="w-full max-w-[1280.1px] mx-auto">
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-[48px] font-bold">Timeline</h1>
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Pick a color</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
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
