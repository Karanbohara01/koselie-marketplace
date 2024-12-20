import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    newOrders: 0,
    revenue: 0,
    pendingTasks: 0,
    supportTickets: 0,
  });

  const [targetMetrics, setTargetMetrics] = useState({
    totalUsers: 0,
    newOrders: 25,
    revenue: 1000,
    pendingTasks: 8,
    supportTickets: 15,
  });

  const [totalUsers, setTotalUsers] = useState(0); // State to store the total users

  const animateValue = (start, end, duration, callback) => {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
      current += increment;
      callback(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    // Fetch total users from the API
    const getTotalUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8181/api/admin/total-users"
        );
        setTotalUsers(res.data.totalUsers); // Update state with the fetched value
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };
    getTotalUsers();

    // Animate each metric to its target value
    animateValue(0, targetMetrics.totalUsers, 2000, (val) =>
      setMetrics((prev) => ({ ...prev, totalUsers: val }))
    );
    animateValue(0, targetMetrics.newOrders, 2000, (val) =>
      setMetrics((prev) => ({ ...prev, newOrders: val }))
    );
    animateValue(0, targetMetrics.revenue, 2000, (val) =>
      setMetrics((prev) => ({ ...prev, revenue: val }))
    );
    animateValue(0, targetMetrics.pendingTasks, 2000, (val) =>
      setMetrics((prev) => ({ ...prev, pendingTasks: val }))
    );
    animateValue(0, targetMetrics.supportTickets, 2000, (val) =>
      setMetrics((prev) => ({ ...prev, supportTickets: val }))
    );
  }, [targetMetrics]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin!</p>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Total Users */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
          <p className="mt-4 text-3xl font-bold text-blue-500">{totalUsers}</p>
          <p className="mt-1 text-sm text-gray-500">Compared to last month</p>
        </div>

        {/* Card 2: New Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">New Orders</h2>
          <p className="mt-4 text-3xl font-bold text-green-500">
            {metrics.newOrders}
          </p>
          <p className="mt-1 text-sm text-gray-500">In the last 24 hours</p>
        </div>

        {/* Card 3: Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
          <p className="mt-4 text-3xl font-bold text-purple-500">
            ${metrics.revenue}
          </p>
          <p className="mt-1 text-sm text-gray-500">This week</p>
        </div>

        {/* Card 4: Pending Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Pending Tasks</h2>
          <p className="mt-4 text-3xl font-bold text-yellow-500">
            {metrics.pendingTasks}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Tasks remaining for today
          </p>
        </div>

        {/* Card 5: Support Tickets */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">
            Support Tickets
          </h2>
          <p className="mt-4 text-3xl font-bold text-red-500">
            {metrics.supportTickets}
          </p>
          <p className="mt-1 text-sm text-gray-500">Awaiting response</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
