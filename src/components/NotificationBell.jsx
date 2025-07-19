import { useEffect, useState } from "react";
import { Bell, Check, Trash2 } from "lucide-react";
import { format } from "timeago.js";
import toast from "react-hot-toast"; // npm install react-hot-toast
const backendURL = import.meta.env.VITE_BACKEND_URL ;

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await fetch(`${backendURL}/api/notifications`); //axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/notifications`);

      const data = await res.json();
      setNotifications(data);
      toast.success("🔔 Notifications fetched");
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
      toast.error("❌ Failed to fetch notifications");
    }
  };

  const markAsRead = async (id) => {
    try {
      await fetch(`/api/notifications/${id}/read`, { method: "PATCH" });
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, read: true } : n))
      );
    } catch (error) {
      toast.error("❌ Mark as read failed");
    }
  };

  const deleteNotif = async (id) => {
    try {
      await fetch(`/api/notifications/${id}`, { method: "DELETE" });
      setNotifications((prev) => prev.filter((n) => n._id !== id));
      toast.success("🗑 Notification deleted");
    } catch (error) {
      toast.error("❌ Failed to delete");
    }
  };

  return (
    <div className="relative">
      <button
        className="relative p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white
        hover:from-indigo-600 hover:to-blue-600 hover:scale-[1.03] hover:shadow-lg rounded-full"
        onClick={() => setOpen(!open)}
      >
        <Bell className="w-6 h-6" />
        {notifications.filter((n) => !n.read).length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 rounded-full">
            {notifications.filter((n) => !n.read).length}
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
                <li
                  key={notif._id}
                  className={`p-4 transition-all ${
                    notif.read ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{notif.title}</p>
                      <p className="text-sm text-gray-600">{notif.message}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {format(notif.timestamp)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {!notif.read && (
                        <button onClick={() => markAsRead(notif._id)}>
                          <Check className="w-4 h-4 text-green-600 hover:scale-110" />
                        </button>
                      )}
                      <button onClick={() => deleteNotif(notif._id)}>
                        <Trash2 className="w-4 h-4 text-red-500 hover:scale-110" />
                      </button>
                    </div>
                  </div>
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
