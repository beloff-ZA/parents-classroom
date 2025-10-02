import React from "react";
import Layout from "@components/layout/Layout";

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-lg font-semibold">Total Assignments</h2>
            <p className="text-3xl font-bold mt-2">30</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-lg font-semibold">Completed</h2>
            <p className="text-3xl font-bold mt-2">22</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-lg font-semibold">Pending</h2>
            <p className="text-3xl font-bold mt-2">8</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-lg font-semibold">Completion Rate</h2>
            <p className="text-3xl font-bold mt-2">73%</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
