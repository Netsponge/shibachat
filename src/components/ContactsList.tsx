import React from 'react';
import { MessageSquare, Phone, Video, MoreHorizontal, Search } from 'lucide-react';

const contacts = [
  { id: 1, name: "柴犬マスター", status: "online", avatar: "🐕", statusText: "わんわん!" },
  { id: 2, name: "柴犬クイーン", status: "busy", avatar: "🦊", statusText: "お散歩中..." },
  { id: 3, name: "パピーパワー", status: "away", avatar: "🐶", statusText: "おやすみ～" },
  { id: 4, name: "グッドボーイ", status: "offline", avatar: "🐕‍🦺", statusText: "また後で!" }
];

export default function ContactsList() {
  return (
    <div className="h-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-orange-200 overflow-hidden">
      <div className="p-4 bg-orange-50/50 border-b-2 border-orange-200">
        <h2 className="font-bold text-orange-600 mb-3">Friends</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search friends..."
            className="w-full p-2 pl-9 rounded-full border-2 border-orange-200 focus:outline-none focus:border-orange-400 bg-white/80"
          />
          <Search className="absolute left-3 top-2.5 text-orange-400" size={18} />
        </div>
      </div>
      
      <div className="overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-4 hover:bg-orange-50 transition-colors border-b border-orange-100 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-300 p-1">
                    <span className="text-2xl">{contact.avatar}</span>
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                      contact.status === "online"
                        ? "bg-green-400"
                        : contact.status === "busy"
                        ? "bg-red-400"
                        : contact.status === "away"
                        ? "bg-amber-400"
                        : "bg-gray-400"
                    } shadow-lg`}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{contact.name}</h3>
                  <p className="text-sm text-orange-400">{contact.statusText}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <button className="p-2 text-orange-400 hover:bg-orange-100 rounded-full transition-colors">
                  <MessageSquare size={18} />
                </button>
                <button className="p-2 text-orange-400 hover:bg-orange-100 rounded-full transition-colors">
                  <Phone size={18} />
                </button>
                <button className="p-2 text-orange-400 hover:bg-orange-100 rounded-full transition-colors">
                  <Video size={18} />
                </button>
                <button className="p-2 text-orange-400 hover:bg-orange-100 rounded-full transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}