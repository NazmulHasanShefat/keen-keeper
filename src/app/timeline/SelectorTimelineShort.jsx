"use client"
import React from 'react';

const SelectorTimelineShort = ({ selectorFn }) => {
    return (
       <select onChange={handleSelectorChange} defaultValue="Pick a color" className="select">
          <option disabled={true}>short by</option>
          <option>Call</option>
          <option>Video</option>
          <option>Message</option>
          <option>All</option>
        </select>
    );
};

export default SelectorTimelineShort;