// "use client" is required to indicate that this is a client-side rendered component in Next.js 13+ (with app directory or "use client" support).
"use client";
import { FC, useState } from "react";
import Navbar from "../components/Navbar"; // Adjust if your Navbar is in a different location

interface Notification {
  id: number;
  message: string;
  date: string;
  rating: number;
}

const NotificationPage: FC = () => {
  // Sample notifications data
  const notifications: Notification[] = [
    {
      id: 1,
      message: "The answer to 'Programmes et Cours' has received a low rating. Please review and edit it.",
      date: "2025-01-26",
      rating: 2, // Bad rating
    },
    {
      id: 2,
      message: "The answer to 'Admission et Inscription' has received a low rating. Please review and edit it.",
      date: "2025-01-25",
      rating: 1, // Very bad rating
    },
    {
      id: 3,
      message: "The answer to 'Ressources Académiques' has received a low rating. Please review and edit it.",
      date: "2025-01-24",
      rating: 3, // Bad rating
    },
    {
      id: 4,
      message: "The answer to 'Santé et Bien-être' has received a low rating. Please review and edit it.",
      date: "2025-01-23",
      rating: 2, // Bad rating
    },
  ];

  const [viewedNotifications, setViewedNotifications] = useState<Set<number>>(
    new Set()
  );

  const handleNotificationClick = (id: number) => {
    setViewedNotifications((prevState) => {
      const newState = new Set(prevState);
      newState.add(id);
      return newState;
    });
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gradient-to-r from-[#1E2A47] to-[#34495E] rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Admin Notifications
        </h2>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-md ${
                viewedNotifications.has(notification.id)
                  ? "bg-gray-100"
                  : "bg-white"
              }`}
              onClick={() => handleNotificationClick(notification.id)}
            >
              <h3
                className={`text-lg font-semibold mb-2 ${
                  notification.rating <= 2 ? "text-red-600" : "text-yellow-600"
                }`}
              >
                {notification.message}
              </h3>
              <p className="text-sm text-gray-600">
                Received on: {notification.date}
              </p>
              <div className="mt-2">
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded-full ${
                    notification.rating <= 2
                      ? "bg-red-300 text-red-700"
                      : "bg-yellow-300 text-yellow-700"
                  }`}
                >
                  Rating: {notification.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
