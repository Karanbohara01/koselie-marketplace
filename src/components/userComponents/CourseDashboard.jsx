import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ModuleOverview from "./ModuleOverview";
import QuizSection from "./QuizSection";

// Tab Component to manage active tab state
const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div>
            <ModuleOverview />
          </div>
        );
      case "Resources":
        return (
          <div>
            {" "}
            {/* Weekly Lessons */}
            <div className="mt-6 bg-white rounded shadow p-4">
              <h2 className="text-xl font-bold mb-4">Weekly Lessons</h2>
              {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, idx) => (
                <details key={idx} className="mb-2 border-b">
                  <summary className="cursor-pointer py-2">{week}</summary>
                  <p className="text-gray-600 p-2">
                    Lesson details for {week}...
                  </p>
                </details>
              ))}
            </div>
          </div>
        );
      case "Study Materials":
        return <div>Study Materials content goes here...</div>;
      case "Tasks":
        return <div>Tasks content goes here...</div>;
      case "Quiz":
        return (
          <div>
            <QuizSection />
          </div>
        );
      case "Challenges":
        return <div>Challenges content goes here...</div>;
      default:
        return <div>Select a tab to see content</div>;
    }
  };

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {[
          "Overview",
          "Resources",
          "Study Materials",
          "Tasks",
          "Quiz",
          "Challenges",
        ].map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 transition-colors duration-200 ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

const CourseDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-green-800 text-white py-4 px-8">
        <h1 className="text-2xl font-bold">SAT Preparation</h1>
        <div className="flex space-x-4 mt-2">
          {/* <span>⭐ Year Three</span> */}
          <span>📅 6 Weeks</span>
          <span>⏱ 10 Hours</span>
          <span>📚 38 Lessons</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-wrap p-8">
        {/* Left Section */}
        <div className="w-full md:w-2/3 pr-4">
          {/* Video */}
          <div className="mb-6 flex items-end">
            <iframe
              width="970"
              height="405"
              src="https://www.youtube.com/embed/Z3KKfGaGkbw?si=dTP6D2vdmRln-3v3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Tabs */}
          <TabComponent />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 bg-white p-4 rounded shadow">
          {/* Lecturer Info */}
          <div className="flex items-center mb-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEY-vJ7iqDceg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1679320099310?e=1740009600&v=beta&t=JjKIlv2oF4BTd3tyjRRT8sO18jG9gRBMFZmNuzNok4w"
              alt="Lecturer"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-bold">Bishal Karki</h3>
              <p className="text-sm text-gray-500">CEO | Instructor</p>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="mb-6">
            <h3 className="font-bold mb-4">Overall Progress</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Circular Progress Bars */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={18}
                    text={`${18}%`}
                    styles={buildStyles({
                      textColor: "#ef4444", // Red color for text
                      pathColor: "#ef4444", // Red progress bar
                      trailColor: "#f3f4f6",
                    })}
                  />
                </div>
                <p className="text-sm mt-2">Lessons Completed</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={0}
                    text={`${0}%`}
                    styles={buildStyles({
                      textColor: "#22c55e", // Green color for text
                      pathColor: "#22c55e", // Green progress bar
                      trailColor: "#f3f4f6",
                    })}
                  />
                </div>
                <p className="text-sm mt-2">Assignments Completed</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={100}
                    text={`${100}%`}
                    styles={buildStyles({
                      textColor: "#ec4899", // Pink color for text
                      pathColor: "#ec4899", // Pink progress bar
                      trailColor: "#f3f4f6",
                    })}
                  />
                </div>
                <p className="text-sm mt-2">Attendance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
