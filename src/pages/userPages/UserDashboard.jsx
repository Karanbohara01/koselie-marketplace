import React from "react";
import {
  FaUsers,
  FaUser,
  FaBookmark,
  FaMemory,
  FaVideo,
  FaCalendarAlt,
  FaShoppingCart,
  FaImage,
  FaSmile,
  FaEllipsisH,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaHome,
  FaRegCompass,
  FaStore,
  FaRegBell,
  FaCommentDots,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

const UserDashboard = () => {
  return (
    <>
      <div className="bg-gray-100 h-auto text-white p-4">
        <div className="flex justify-between items-center">
          {/* Left Side: Facebook Logo & Search Bar */}
          <div className="flex items-center   flex-1 space-x-4">
            <div className="bg-white p-2 rounded-full border-pink-700 border-r-4 text-pink-700">
              <img className="w-20 h-18 rounded-lg" src={logo} alt="Koselie" />
            </div>
            <input
              type="text"
              placeholder="Search Koselie"
              className="bg-pink-100 text-black rounded-full py-2 px-4 w-80 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Center: Navigation Icons */}
          <div className="flex flex-auto items-center justify-center w-auto  space-x-8">
            <a href="#" className="text-white hover:text-pink-300">
              <FaHome className="w-6 h-6 text-pink-700" /> {/* Home Icon */}
            </a>
            <a href="#" className="text-white hover:text-pink-300">
              <FaRegCompass className="w-6 h-6  text-pink-700" />{" "}
              {/* Watch Icon */}
            </a>
            <Link to="/homepage" className="text-white hover:text-pink-300">
              <FaStore className="w-6 h-6  text-pink-700" />{" "}
              {/* Marketplace Icon */}
            </Link>
            <a href="#" className="text-white hover:text-pink-300">
              <FaUsers className="w-6 h-6  text-pink-700" /> {/* Groups Icon */}
            </a>
          </div>

          {/* Right Side: Notifications, Messages, and Profile */}
          <div className="flex items-center flex-auto justify-end space-x-4  ">
            <div className="relative">
              <a href="#" className="text-white">
                <FaCommentDots className="w-6 h-6 text-pink-700" />{" "}
                {/* Chat Icon */}
              </a>
              <span className="absolute top-0 right-0  text-white rounded-full text-xs p-1"></span>
            </div>
            <div className="relative">
              <a href="#" className="text-white">
                <FaRegBell className="w-6 h-6 text-pink-700" />{" "}
                {/* Notification Icon */}
              </a>
              <span className="absolute top-0 right-0 text-white rounded-full text-xs p-1"></span>
            </div>
            <a href="#" className="text-white">
              <img
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-1/414043788_1089417982189569_1400212815241141264_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHY-qXv-EtgacC691QesVvLycLuIbUQX8rJwu4htRBfyko-TAlWbmDbPg4DZ4WxTifcGvqaHdTZhySfV89OkHBA&_nc_ohc=ziqsYRb283oQ7kNvgH8Fb52&_nc_zt=24&_nc_ht=scontent.fktm21-1.fna&_nc_gid=Auwf435epOTY4zQzCCFKPdO&oh=00_AYAXgKq6xFBnVEJc_wBlpHp9PjrpDZsBUQDoOvmqsGMBpw&oe=675A2D54"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex  bg-red-100 min-h-screen">
        {/* Sidebar */}
        <div className="w-1/3 shadow-lg p-6 bg-white   sticky top-10 overflow-hidden">
          {/* Profile Name */}
          <div className="text-lg font-semibold text-pink-700 flex items-center mb-6">
            {/* <FaUser className="mr-2 text-2xl text-pink-700" /> */}
            <img
              src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-1/414043788_1089417982189569_1400212815241141264_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHY-qXv-EtgacC691QesVvLycLuIbUQX8rJwu4htRBfyko-TAlWbmDbPg4DZ4WxTifcGvqaHdTZhySfV89OkHBA&_nc_ohc=ziqsYRb283oQ7kNvgH8Fb52&_nc_zt=24&_nc_ht=scontent.fktm21-1.fna&_nc_gid=Auwf435epOTY4zQzCCFKPdO&oh=00_AYAXgKq6xFBnVEJc_wBlpHp9PjrpDZsBUQDoOvmqsGMBpw&oe=675A2D54"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="ml-2">Karan Bohara</span>
          </div>

          {/* Main Sidebar Menu */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaUsers className="text-pink-700 text-xl" />
              <span className="text-gray-700">Friends</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaBookmark className="text-pink-700 text-xl" />
              <span className="text-gray-700">Saved</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaMemory className="text-pink-700 text-xl" />
              <span className="text-gray-700">Memories</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaVideo className="text-pink-700 text-xl" />
              <span className="text-gray-700">Video</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaCalendarAlt className="text-pink-700 text-xl" />
              <span className="text-gray-700">Events</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaShoppingCart className="text-pink-700 text-xl" />
              <span className="text-gray-700">Bazaar</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <span className="text-pink-700 text-xl">
                <FaUserDoctor />
              </span>
              <span className="text-gray-700">My Doctor</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaEllipsisH className="text-pink-700 text-xl" />
              <span className="text-gray-700">See more</span>
            </div>
          </div>

          {/* Shortcuts Section */}
          <div className="mt-8">
            <div className="text-sm font-semibold text-pink-700">
              Your shortcuts
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaUsers className="text-pink-700 text-xl" />
              <span className="text-gray-700">Mommy's Community</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <FaUsers className="text-pink-700 text-xl" />
              <span className="text-gray-700">Doctor Q&A Sessions</span>
            </div>
          </div>
        </div>

        <div className="flex-2 items-center flex flex-col p-4 space-y-6 overflow-y-auto ">
          {/* Stories Section */}
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {/* Create Story */}
            <div className="relative">
              <img
                src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/Female_Studio_Eyes_Closed-1296x728-Header-1296x728.jpg?w=1155&h=1528"
                alt="Create story"
                className="w-24 h-24 rounded-full border-4 border-pink-500 transform hover:scale-110 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-500 to-transparent text-white text-center py-1 text-xs rounded-b-lg font-semibold">
                Create Story
              </div>
            </div>

            {/* User Stories */}
            {["Albert Frank", "Jenny Marzia", "Maria Walt", "John Carl"].map(
              (name) => (
                <div key={name} className="relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aImyYJeubzDSGfRgXwoE322wBIcGhW31AA&s"
                    alt={name}
                    className="w-24 h-24 rounded-full transform hover:scale-110 transition duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs rounded-b-lg font-semibold">
                    {name}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-md">
            {/* Input Section */}
            <div className="flex items-center p-4">
              <img
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-1/414043788_1089417982189569_1400212815241141264_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHY-qXv-EtgacC691QesVvLycLuIbUQX8rJwu4htRBfyko-TAlWbmDbPg4DZ4WxTifcGvqaHdTZhySfV89OkHBA&_nc_ohc=ziqsYRb283oQ7kNvgH8Fb52&_nc_zt=24&_nc_ht=scontent.fktm21-1.fna&_nc_gid=Auwf435epOTY4zQzCCFKPdO&oh=00_AYAXgKq6xFBnVEJc_wBlpHp9PjrpDZsBUQDoOvmqsGMBpw&oe=675A2D54"
                alt="User Profile"
                className="w-10 h-10 rounded-full"
              />
              <input
                type="text"
                placeholder="What's on your mind, Karan?"
                className="ml-4 flex-1 bg-pink-100 rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around border-t p-2">
              <Link to="/golivenow">
                <button className="flex items-center text-pink-500 hover:bg-pink-100 px-4 py-2 rounded-md">
                  <FaVideo className="mr-2" />
                  <span className="text-sm font-medium">Go Live</span>
                </button>
              </Link>
              <button className="flex items-center text-pink-500 hover:bg-pink-100 px-4 py-2 rounded-md">
                <FaImage className="mr-2" />
                <span className="text-sm font-medium">Photo/video</span>
              </button>
              <button className="flex items-center text-pink-500 hover:bg-pink-100 px-4 py-2 rounded-md">
                <FaSmile className="mr-2" />
                <span className="text-sm font-medium">Feeling/activity</span>
              </button>
            </div>
          </div>

          {/* Feed Section */}
          <div className="  p-4 rounded-lg shadow-lg space-y-6">
            <div className="flex  items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s"
                alt="Adarsha"
                className="w-12 h-12 rounded-full border-lg object-cover border-pink-800"
              />
              <div>
                <div className="font-semibold text-lg">Adarsha</div>
                <div className="text-sm text-gray-500">5 mins ago</div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-900 font-medium">It’s Coming ❄️</p>
              <img
                src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP"
                alt="snowfall"
                className="mt-2 rounded-lg shadow-md h-4/5 w-96   border-pink-700"
              />
            </div>

            {/* Like, Comment, Share Actions */}
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaHeart />
                <span className="font-semibold">Like</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaComment />
                <span className="font-semibold">Comment</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaShareAlt />
                <span className="font-semibold">Share</span>
              </div>
            </div>

            {/* Post Comments Section */}
            <div className="mt-4 space-y-4">
              {/* Comment 1 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 1"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Alex</div>
                  <div className="text-sm text-pink-700">
                    This looks amazing!
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 2"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Sophia</div>
                  <div className="text-sm text-pink-700">
                    I can't wait to see it!
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Input Box */}
            <div className="flex items-center mt-4 space-x-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          <div className="  p-4 rounded-lg shadow-lg space-y-6">
            <div className="flex  items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Adarsha"
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <div>
                <div className="font-semibold text-lg">Adarsha</div>
                <div className="text-sm text-gray-500">5 mins ago</div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-900 font-medium">It’s Coming ❄️</p>
              <img
                src="https://via.placeholder.com/400x200"
                alt="snowfall"
                className="mt-2 rounded-lg shadow-md"
              />
            </div>

            {/* Like, Comment, Share Actions */}
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaHeart />
                <span className="font-semibold">Like</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaComment />
                <span className="font-semibold">Comment</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaShareAlt />
                <span className="font-semibold">Share</span>
              </div>
            </div>

            {/* Post Comments Section */}
            <div className="mt-4 space-y-4">
              {/* Comment 1 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 1"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Alex</div>
                  <div className="text-sm text-pink-700">
                    This looks amazing!
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 2"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Sophia</div>
                  <div className="text-sm text-pink-700">
                    I can't wait to see it!
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Input Box */}
            <div className="flex items-center mt-4 space-x-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          <div className="  p-4 rounded-lg shadow-lg space-y-6">
            <div className="flex  items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Adarsha"
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <div>
                <div className="font-semibold text-lg">Adarsha</div>
                <div className="text-sm text-gray-500">5 mins ago</div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-900 font-medium">It’s Coming ❄️</p>
              <img
                src="https://via.placeholder.com/400x200"
                alt="snowfall"
                className="mt-2 rounded-lg shadow-md"
              />
            </div>

            {/* Like, Comment, Share Actions */}
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaHeart />
                <span className="font-semibold">Like</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaComment />
                <span className="font-semibold">Comment</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaShareAlt />
                <span className="font-semibold">Share</span>
              </div>
            </div>

            {/* Post Comments Section */}
            <div className="mt-4 space-y-4">
              {/* Comment 1 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 1"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Alex</div>
                  <div className="text-sm text-pink-700">
                    This looks amazing!
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 2"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Sophia</div>
                  <div className="text-sm text-pink-700">
                    I can't wait to see it!
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Input Box */}
            <div className="flex items-center mt-4 space-x-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          <div className="  p-4 rounded-lg shadow-lg space-y-6">
            <div className="flex  items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Adarsha"
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <div>
                <div className="font-semibold text-lg">Adarsha</div>
                <div className="text-sm text-gray-500">5 mins ago</div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-900 font-medium">It’s Coming ❄️</p>
              <img
                src="https://via.placeholder.com/400x200"
                alt="snowfall"
                className="mt-2 rounded-lg shadow-md"
              />
            </div>

            {/* Like, Comment, Share Actions */}
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaHeart />
                <span className="font-semibold">Like</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaComment />
                <span className="font-semibold">Comment</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaShareAlt />
                <span className="font-semibold">Share</span>
              </div>
            </div>

            {/* Post Comments Section */}
            <div className="mt-4 space-y-4">
              {/* Comment 1 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 1"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Alex</div>
                  <div className="text-sm text-pink-700">
                    This looks amazing!
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 2"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Sophia</div>
                  <div className="text-sm text-pink-700">
                    I can't wait to see it!
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Input Box */}
            <div className="flex items-center mt-4 space-x-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          <div className="  p-4 rounded-lg shadow-lg space-y-6">
            <div className="flex  items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Adarsha"
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <div>
                <div className="font-semibold text-lg">Adarsha</div>
                <div className="text-sm text-gray-500">5 mins ago</div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-900 font-medium">It’s Coming ❄️</p>
              <img
                src="https://via.placeholder.com/400x200"
                alt="snowfall"
                className="mt-2 rounded-lg shadow-md"
              />
            </div>

            {/* Like, Comment, Share Actions */}
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaHeart />
                <span className="font-semibold">Like</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaComment />
                <span className="font-semibold">Comment</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaShareAlt />
                <span className="font-semibold">Share</span>
              </div>
            </div>

            {/* Post Comments Section */}
            <div className="mt-4 space-y-4">
              {/* Comment 1 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 1"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Alex</div>
                  <div className="text-sm text-pink-700">
                    This looks amazing!
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 2"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Sophia</div>
                  <div className="text-sm text-pink-700">
                    I can't wait to see it!
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Input Box */}
            <div className="flex items-center mt-4 space-x-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          <div className="  p-4 rounded-lg shadow-lg space-y-6">
            <div className="flex  items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Adarsha"
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <div>
                <div className="font-semibold text-lg">Adarsha</div>
                <div className="text-sm text-gray-500">5 mins ago</div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-900 font-medium">It’s Coming ❄️</p>
              <img
                src="https://via.placeholder.com/400x200"
                alt="snowfall"
                className="mt-2 rounded-lg shadow-md"
              />
            </div>

            {/* Like, Comment, Share Actions */}
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaHeart />
                <span className="font-semibold">Like</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaComment />
                <span className="font-semibold">Comment</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-700 cursor-pointer hover:text-pink-500 transition duration-200">
                <FaShareAlt />
                <span className="font-semibold">Share</span>
              </div>
            </div>

            {/* Post Comments Section */}
            <div className="mt-4 space-y-4">
              {/* Comment 1 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 1"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Alex</div>
                  <div className="text-sm text-pink-700">
                    This looks amazing!
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User 2"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Sophia</div>
                  <div className="text-sm text-pink-700">
                    I can't wait to see it!
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Input Box */}
            <div className="flex items-center mt-4 space-x-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
        </div>

        {/* Suggested Section */}
        {/* Suggested Section */}
        <div className="w-1/3 p-6 shadow-lg bg-white ">
          <div className="text-sm font-semibold text-pink-700 mb-4">
            Suggested
          </div>
          <div className="text-lg text-pink-700 font-semibold mb-4">
            Community
          </div>

          <button className="bg-pink-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-pink-700 transition-colors duration-200">
            Find Your Groups
          </button>

          <div className="mt-6 space-y-3">
            <div className="text-sm text-pink-700">
              Josh and 4 friends joined Groups
            </div>

            {/* Member List with Images */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Alexander Smith"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">Alexander Smith</div>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Olivia Johnson"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">Olivia Johnson</div>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Benjamin Williams"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">Benjamin Williams</div>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Emily Brown"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">Emily Brown</div>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Liam Davis"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">Liam Davis</div>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Sophia Martinez"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">Sophia Martinez</div>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Noah Wilson"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">Noah Wilson</div>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="William Taylor"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">William Taylor</div>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Jacob Harris"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-500">Jacob Harris</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
