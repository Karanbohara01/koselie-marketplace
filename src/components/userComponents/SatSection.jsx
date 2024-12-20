import React, { useState } from "react";
import { Link } from "react-router-dom";

const modules = [
  { title: "SAT PREPARATION", year: "Year Three" },
  { title: "ST6003CEM Web API Development", year: "Year Three" },
  { title: "STA309IAE Design Thinking and Innovation", year: "Year Three" },
  { title: "ST6002CEM Mobile Application Development", year: "Year Three" },
  { title: "SP6000COM Data Analytics", year: "Year Three" },
  { title: "GETS: Writing", year: "Year One" },
  {
    title: "ST4008CEM Computing Activity Led Learning Project 1",
    year: "Year One",
  },
  { title: "GETS: Speaking", year: "Year One" },
];

export default function SatSection() {
  const [activeTab, setActiveTab] = useState("Learnings");

  const tabs = [
    "Learnings",
    "My Assignments",
    "Tasks",
    "Attendance",
    "Results",
    "Books",
    "Staff Information",
    "Profile",
    "Ethical Form",
    "Fees",
  ];

  return (
    <div className="flex h-auto mb-8 bg-gray-100">
      {/* Sidebar as Tabs */}
      <div className="w-64 bg-green-700 text-white flex-shrink-0">
        <div className="p-4 flex flex-col items-center">
          {/* Profile Section */}
          <img
            src="https://api.schoolworkspro.com/uploads/users/732ebd70-b366-448b-a4e2-d492e12e9381.jpg"
            alt="profile"
            className="rounded-full mb-3 h-14"
          />
          <h2 className="text-lg font-semibold">Karan Bohara</h2>
          <p className="text-sm text-blue-200">220404@softwarica.edu.np</p>
          <p className="text-sm text-blue-200 mb-2">Coventry ID: 13703532</p>

          <div className="flex space-x-1 mb-4">
            <span>⭐⭐⭐⭐</span>
          </div>

          <button className="bg-pink-600 text-white w-full py-1 mb-2">
            View My Resume
          </button>
          <button className="bg-green-500 text-white w-full py-1 mb-2">
            Examination Slip
          </button>
          <button className="bg-yellow-500 text-white w-full py-1 mb-2">
            Student Handbook
          </button>
        </div>

        {/* Navigation Tabs */}
        <nav className="mt-4">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(item)}
              className={`block w-full py-2 px-4 text-left transition ${
                activeTab === item
                  ? "bg-blue-700 font-bold"
                  : "hover:bg-blue-700"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">{activeTab}</h1>

        {/* Conditional Content Based on Active Tab */}
        {activeTab === "Learnings" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                placeholder="Search by title"
                className="border rounded p-2 w-1/3"
              />
              <select className="border rounded p-2">
                <option>Select Year</option>
                <option>Year One</option>
                <option>Year Two</option>
                <option>Year Three</option>
              </select>
            </div>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-pink-600 text-white">
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">Year</th>
                  <th className="p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module, index) => (
                  <tr key={index} className="even:bg-gray-100">
                    <td className="p-2">{module.title}</td>
                    <td className="p-2">{module.year}</td>
                    <td className="p-2 text-center">
                      <Link to={"/coursedashboard"}>
                        <button className="bg-green-500 text-white px-4 py-1 rounded">
                          Go To Module/Subject
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Placeholder Content for Other Tabs */}
        {activeTab !== "Learnings" && (
          <div className="text-lg text-gray-700">
            Content for <strong>{activeTab}</strong> will go here.
          </div>
        )}
      </div>
    </div>
  );
}
