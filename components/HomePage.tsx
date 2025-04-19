"use client";

import { LockClosedIcon, EyeIcon, BellIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  const stats = [
    {
      label: "Encryptions",
      value: 14,
      bg: "bg-purple-100",
      icon: <LockClosedIcon className="h-5 w-5 text-purple-600" />,
    },
    {
      label: "Decryptions",
      value: 5,
      bg: "bg-yellow-100",
      icon: <EyeIcon className="h-5 w-5 text-yellow-600" />,
    },
  ];

  return (
    <div className="mt-6 space-y-6">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Welcome Back 👋</h2>
        <div className="bg-white p-2 rounded-full shadow">
          <BellIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      {/* Notification */}
      <div className="bg-white p-4 rounded-xl shadow-sm text-sm text-gray-700 flex items-center gap-2">
        📬 You have <span className="font-semibold">3</span> new notifications
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} p-4 rounded-xl flex flex-col items-center justify-center`}
          >
            <div className="mb-1">{stat.icon}</div>
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="text-lg font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      {/* <div className="space-y-3">
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg shadow font-semibold hover:bg-purple-700 transition">
          Start Encrypting 🔐
        </button>
        <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg shadow hover:bg-gray-200 transition">
          Go to Decrypt 🔍
        </button>
      </div> */}
    </div>
  );
}
