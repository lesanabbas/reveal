"use client";

import { PencilIcon, BellIcon, ArrowRightOnRectangleIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function ProfilePage() {
  const user = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    avatarUrl: "", // You can use a placeholder or real image URL
  };

  const settings = [
    {
      label: "Edit Profile",
      icon: <PencilIcon className="h-5 w-5 text-purple-600" />,
    },
    {
      label: "Notifications",
      icon: <BellIcon className="h-5 w-5 text-purple-600" />,
    },
    {
      label: "Preferences",
      icon: <Cog6ToothIcon className="h-5 w-5 text-purple-600" />,
    },
    {
      label: "Log Out",
      icon: <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-500" />,
      danger: true,
    },
  ];

  return (
    <div className="mt-6 space-y-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="w-full h-full flex items-center justify-center text-gray-500 text-xl">
                👤
              </span>
            )}
          </div>
          <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
            <PencilIcon className="w-4 h-4 text-gray-600" />
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Settings List */}
      <div className="bg-white rounded-xl shadow-md divide-y divide-gray-200">
        {settings.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center justify-between p-4 text-sm ${item.danger ? "text-red-600" : "text-gray-700"
              } hover:bg-gray-50`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
