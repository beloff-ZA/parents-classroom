import React from "react";
import TestComponent from "../../components/common/testComponent";

const PlaceholderDashboard: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard Placeholder</h1>
      <p>This is where Google Classroom assignments will appear.</p>
      <TestComponent />
    </div>
  );
};

export default PlaceholderDashboard;
