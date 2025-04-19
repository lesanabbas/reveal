"use client";

export default function HistoryPage() {
  const history = [
    {
      type: "Encrypt",
      filename: "vacation_photo.jpg",
      time: "Apr 19, 10:05 AM",
    },
    {
      type: "Decrypt",
      filename: "hidden_note.png",
      time: "Apr 18, 6:42 PM",
    },
    {
      type: "Encrypt",
      filename: "secret_map.jpeg",
      time: "Apr 18, 4:10 PM",
    },
  ];

  const getIcon = (type: string) => {
    return type === "Encrypt" ? "🟣" : "🔍";
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4 text-center">History</h2>
      <ul className="space-y-3">
        {history.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{getIcon(item.type)}</span>
              <div>
                <p className="text-sm font-semibold">{item.type}</p>
                <p className="text-xs text-gray-500">{item.filename}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
