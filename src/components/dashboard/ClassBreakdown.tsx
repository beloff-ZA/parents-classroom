// src/components/dashboard/ClassBreakdown.tsx
import React from "react";

type ClassData = {
  name: string;
  assigned: number;
  completed: number;
  notCompleted: number;
};

const dummyClasses: ClassData[] = [
  { name: "Math", assigned: 12, completed: 9, notCompleted: 3 },
  { name: "Science", assigned: 10, completed: 6, notCompleted: 4 },
  { name: "English", assigned: 8, completed: 7, notCompleted: 1 },
];

const ClassBreakdown: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {dummyClasses.map((cls) => (
        <div key={cls.name} className="bg-white shadow-md rounded-xl p-4">
          <h4 className="font-semibold text-gray-700">{cls.name}</h4>
          <p className="text-sm text-gray-500">Assigned: {cls.assigned}</p>
          <p className="text-sm text-green-600">Completed: {cls.completed}</p>
          <p className="text-sm text-red-500">
            Not Completed: {cls.notCompleted}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClassBreakdown;
