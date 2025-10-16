import React from "react";
import ProfileLayout from "@/components/layout/ProfileLayout/ProfileLayout";

export default function Profile() {
  // Placeholder data; later can fetch from API or store
  const user = { name: "John Doe", email: "john@example.com" };
  const spouse = { name: "Jane Doe", email: "jane@example.com" };
  const children = [
    { name: "Child One", age: 10 },
    { name: "Child Two", age: 7 },
  ];

  return (
    <ProfileLayout>
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium">User Info</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Spouse Info</h3>
        <p>Name: {spouse.name}</p>
        <p>Email: {spouse.email}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium">Children</h3>
        <ul className="list-disc ml-5">
          {children.map((child, index) => (
            <li key={index}>
              {child.name} (Age: {child.age})
            </li>
          ))}
        </ul>
      </div>
    </ProfileLayout>
  );
}
