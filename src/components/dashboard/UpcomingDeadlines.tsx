// src/components/dashboard/UpcomingDeadlines.tsx
import React from "react";

type Deadline = {
  subject: string;
  title: string;
  due: string;
};

const dummyDeadlines: Deadline[] = [
  { subject: "Math", title: "Algebra Worksheet", due: "Oct 5" },
  { subject: "Science", title: "Lab Report", due: "Oct 6" },
  { subject: "English", title: "Essay Draft", due: "Oct 7" },
];

const UpcomingDeadlines: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="font-semibold text-gray-700 mb-2">Upcoming Deadlines</h3>
      <ul className="space-y-2">
        {dummyDeadlines.map((item, idx) => (
          <li key={idx} className="flex justify-between text-sm">
            <span>
              <span className="font-medium">{item.subject}:</span> {item.title}
            </span>
            <span className="text-gray-500">{item.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingDeadlines;
