// src/components/dashboard/FilterBar.tsx
import React from "react";

const FilterBar: React.FC = () => {
  return (
    <div className="flex gap-4 bg-white shadow-sm p-3 rounded-xl">
      <select className="border rounded-lg px-3 py-2">
        <option>All Classes</option>
        <option>Math</option>
        <option>Science</option>
        <option>English</option>
      </select>
      <select className="border rounded-lg px-3 py-2">
        <option>This Month</option>
        <option>Last Month</option>
        <option>This Week</option>
      </select>
    </div>
  );
};

export default FilterBar;
