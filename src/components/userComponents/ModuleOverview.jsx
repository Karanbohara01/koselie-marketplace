import React, { useState } from "react";

const ModuleOverview = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-100">
      {/* Header */}
      <h2 className="text-4xl font-extrabold mb-6 text-center text-green-300 tracking-wide">
        Module/Subject Overview
      </h2>

      <p className="text-lg mb-6 leading-relaxed text-gray-200">
        Successful completion of the module requires a methodical approach to
        practice, self-reflection, and learning management. Continuous support
        will be available from an experienced SAT preparation instructor,
        ensuring students master the skills required for top SAT scores.
      </p>

      {/* Read More Section */}
      {showMore && (
        <div className="mt-8 text-lg leading-relaxed text-gray-200">
          {/* Learning Outcomes Section */}
          <h3 className="text-3xl font-semibold mt-8 mb-6 text-center text-green-400">
            Learning Outcomes
          </h3>
          {/* Content Section */}
          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            This module is designed to equip students with the essential
            knowledge and skills needed to excel in the{" "}
            <strong>SAT (Scholastic Assessment Test)</strong>, a widely
            recognized standardized test for college admissions. Students will
            gain a deep understanding of the core subjects tested in the SAT,
            including <strong>Math</strong>,{" "}
            <strong>Evidence-Based Reading</strong>, and{" "}
            <strong>Writing</strong>.
          </p>

          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            The module emphasizes developing critical thinking, problem-solving,
            and analytical skills through targeted practice and review. Students
            will be guided through effective test-taking strategies like time
            management, the process of elimination, and mastering question
            patterns to boost their confidence and performance.
          </p>

          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            Our goal is to foster academic proficiency, sharpen problem-solving
            abilities, and enhance communication skills. By the end of this
            module, students will be prepared to tackle the SAT with increased
            confidence and expertise, enabling them to achieve excellent scores.
          </p>
          <ul className="list-disc pl-8 text-lg leading-relaxed text-gray-200 space-y-2">
            <li>
              Understand the structure and content of the SAT, including Math,
              Reading, and Writing sections.
            </li>
            <li>
              Apply effective test-taking strategies, such as time management
              and question analysis.
            </li>
            <li>
              Analyze and solve complex problems accurately under time
              constraints.
            </li>
            <li>
              Synthesize information from a variety of academic sources to
              improve comprehension and knowledge.
            </li>
            <li>
              Communicate ideas and arguments persuasively in both written and
              oral formats.
            </li>
            <li>
              Develop and execute a personalized study plan to achieve
              continuous improvement and higher SAT scores.
            </li>
          </ul>
          <p>
            Students will also receive personalized feedback throughout their
            preparation journey. They'll participate in mock exams to simulate
            real SAT conditions, identify areas of improvement, and refine their
            test-taking strategies. This hands-on approach ensures that students
            not only understand the material but also excel under exam pressure.
          </p>
        </div>
      )}

      {/* Read More / Read Less Button */}
      <button
        onClick={toggleReadMore}
        className="mt-4 text-lg text-green-400 font-semibold hover:underline focus:outline-none"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ModuleOverview;
