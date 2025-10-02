import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold">Total Assignments</h2>
          <p className="text-3xl font-bold mt-2">30</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-3xl font-bold mt-2">22</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold">Completion Rate</h2>
          <p className="text-3xl font-bold mt-2">73%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
