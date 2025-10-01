import React from "react";
import { useTestStore } from "../../store/testStore";

const TestComponent: React.FC = () => {
  const { count, increment } = useTestStore();

  return (
    <div
      style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h2>Zustand Store Test</h2>
      <p>Count: {count}</p>
      <button onClick={increment} style={{ padding: "0.5rem 1rem" }}>
        Increment
      </button>
    </div>
  );
};

export default TestComponent;
