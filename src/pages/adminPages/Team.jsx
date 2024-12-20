import React from "react";

// Example team data
const teamMembers = [
  {
    name: "Karan Bohara",
    role: "Project Manager",
    image:
      "https://api.schoolworkspro.com/uploads/users/732ebd70-b366-448b-a4e2-d492e12e9381.jpg", // Replace with actual image URLs
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    image:
      "https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-dshanp-2876486.jpg&fm=jpg", // Replace with actual image URLs
  },
  {
    name: "Cathy Lee",
    role: "UI/UX Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww", // Replace with actual image URLs
  },
  {
    name: "David Brown",
    role: "Marketing Specialist",
    image:
      "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww", // Replace with actual image URLs
  },
];

const Team = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
