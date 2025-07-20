import React from "react";
import DynamicIcon from "../components/dynamicIcon/DynamicIcon";

function RightPanel({
    activities,
    contacts,
    notifications,
    isCollapsed
}) {
  return (
    <div className="w-80 bg-white p-4 border-l border-gray-200 overflow-y-auto h-screen">
      {/* Notifications */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Notifications</h2>
        {notifications.map((n, i) => (
          <div key={i} className="flex items-start gap-3 mb-4">
            <div className="bg-blue-100 text-blue-500 p-2 rounded-full text-lg">
              <DynamicIcon icon={n.icon}/>
            </div>
            <div>
              <p className="max-w-58 text-sm text-gray-800 truncate">{n.text}</p>
              <p className="text-xs text-gray-400">{n.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activities */}
      <div className="activities mb-6">
        <h2 className="text-lg font-semibold mb-3">Activities</h2>
        <div className="pl-2">
          {activities.map((a, i) => (
            <div key={i} className="mb-6 flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full text-center text-white text-sm shrink-0 mt-1">
                <span className="text-xl rounded-full">
                    <img className="rounded-full" src={a.avatar} alt="profile"/>
                </span>
              </div>
              <div>
                <p className="max-w-58 text-sm text-gray-800 truncate">{a.text}</p>
                <p className="text-xs text-gray-400">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Contacts</h2>
        <div className="space-y-3">
          {contacts.map((c, i) => (
            <div key={i} className="flex items-center gap-3">
              <img
                src={c.avatar}
                alt={c.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="max-w-58 text-sm text-gray-800 truncate">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
