import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch("/api/notifications");
        const data = await res.json();
        setNotifications(data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="relative">
      <button
        className="relative p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white
        hover:from-indigo-600 hover:to-blue-600 hover:scale-[1.03] hover:shadow-lg  rounded-full"
        onClick={() => setOpen(!open)}
      >
        <Bell className="w-6 h-6" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
          <ul className="divide-y divide-gray-200">
            {notifications.length === 0 ? (
              <li className="p-4 text-center text-gray-500">No notifications</li>
            ) : (
              notifications.map((notif) => (
                <li key={notif._id} className="p-4 hover:bg-gray-100 transition-all">
                  <p className="font-semibold">{notif.title}</p>
                  <p className="text-sm text-gray-600">{notif.message}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
