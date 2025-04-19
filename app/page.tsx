"use client"
import { useState } from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  UserIcon,
  PlusIcon,
  KeyIcon, LockClosedIcon,
} from "@heroicons/react/24/outline";
import HomePage from '@/components/HomePage'
import DecryptPage from "@/components/DecryptPage";
import HistoryPage from "@/components/HistoryPage";
import ProfilePage from "@/components/ProfilePage";
import EncryptPage from "@/components/EncryptPage";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "decrypt":
        return <DecryptPage />; // rename SearchPage to DecryptPage for clarity
      case "encrypt":
        return <EncryptPage />; // new component
      case "history":
        return <HistoryPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile UI */}
      <div className="block md:hidden min-h-screen pt-8 pb-24 font-sans flex flex-col items-center justify-between bg-gray-100 text-gray-900">
        <div className="flex-1 w-full px-4">{renderContent()}</div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-xl rounded-t-3xl px-6 py-3 flex justify-between items-center max-w-md mx-auto w-full">
          <NavItem
            icon={<HomeIcon className="h-6 w-6" />}
            label="Home"
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />

          <NavItem
            icon={<MagnifyingGlassIcon className="h-6 w-6" />} // Optional: replace with a key or decode icon
            label="Decrypt"
            active={activeTab === "decrypt"}
            onClick={() => setActiveTab("decrypt")}
          />

          <div className="relative -top-6">
            <button
              onClick={() => setActiveTab("encrypt")}
              className="bg-purple-600 rounded-full p-4 shadow-lg"
            >
              <PlusIcon className="h-6 w-6 text-white" /> {/* You could use a lock/encode icon instead */}
            </button>
          </div>

          <NavItem
            icon={<ClockIcon className="h-6 w-6" />}
            label="History"
            active={activeTab === "history"}
            onClick={() => setActiveTab("history")}
          />

          <NavItem
            icon={<UserIcon className="h-6 w-6" />}
            label="Profile"
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />
        </div>
      </div>

      {/* Message for non-mobile devices */}
      <div className="hidden md:flex items-center justify-center min-h-screen p-10 text-center">
        <p className="text-2xl font-semibold">
          This UI is only supported on mobile devices.
        </p>
      </div>
    </>
  );
}

function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center text-sm ${active ? "text-purple-600 font-semibold" : "text-gray-500"
        }`}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </button>
  );
}
