import React from "react";


const MyProfile = () => {
  const user = {
    name: "Karan Bohara",
    email: "karanbohara216@gmail.com",
    bio: "A full-stack developer with a passion for creating scalable web and mobile applications.",
    avatar:
      "https://api.schoolworkspro.com/uploads/users/732ebd70-b366-448b-a4e2-d492e12e9381.jpg",
    role: "Software Engineer",
    location: "San Francisco, CA",
    socialLinks: {
      github: "https://github.com/karanbohara",
      linkedin: "https://linkedin.com/in/karanbohara",
      twitter: "https://twitter.com/karanbohara",
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-4 py-8">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-4xl transform transition duration-500 ">
        <div className="flex flex-col md:flex-row items-center md:items-start p-8">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900">
              {user.name}
            </h1>
            <p className="text-xl text-indigo-600 mt-2">{user.role}</p>
            <p className="text-gray-700 mt-4 leading-relaxed">{user.bio}</p>
            <p className="text-sm text-gray-500 mt-2 italic">{user.location}</p>
            <div className="mt-6 flex justify-center md:justify-start space-x-5">
              {Object.entries(user.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 "
                >
                  <i className={`fab fa-${platform} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 border-t px-8 py-6 flex justify-center md:justify-end">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md  transition duration-300 focus:outline-none">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
