import React from 'react';
import { Send, Smile, Paperclip, Image, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 1,
      text: "ワンワン! Welcome to ShibaChat! 🌸",
      sender: "ShibaBot",
      timestamp: "12:00 PM"
    },
    {
      id: 2,
      text: "今日も可愛いね! (You're cute today too!) 🎀",
      sender: "ShibaBot",
      timestamp: "12:01 PM"
    }
  ]);
  const [newMessage, setNewMessage] = React.useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setMessages([...messages, {
      id: Date.now(),
      text: newMessage,
      sender: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-orange-200">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b-2 border-orange-200 bg-orange-50/50 rounded-t-3xl">
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-300 p-1">
          <span className="text-2xl">🐕</span>
        </div>
        <div className="ml-3">
          <h2 className="font-bold text-orange-600">ShibaChat</h2>
          <p className="text-sm text-orange-400">Such kawaii, very chat ~</p>
        </div>
        <button className="ml-auto p-2 rounded-full text-orange-400 hover:bg-orange-100 transition-colors">
          <Sparkles size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-orange-50/30 to-transparent">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] p-4 message-bubble ${
                message.sender === "You"
                  ? "bg-orange-400 text-white rounded-2xl rounded-br-none sent"
                  : "bg-orange-50 text-gray-800 rounded-2xl rounded-bl-none received border-2 border-orange-200"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <span className="text-xs mt-2 block opacity-70">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={sendMessage} className="border-t-2 border-orange-200 p-4 bg-orange-50/50 rounded-b-3xl">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="p-2 text-orange-400 hover:bg-orange-100 rounded-full transition-colors"
          >
            <Paperclip size={20} />
          </button>
          <button
            type="button"
            className="p-2 text-orange-400 hover:bg-orange-100 rounded-full transition-colors"
          >
            <Image size={20} />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type something kawaii..."
            className="flex-1 p-3 rounded-full border-2 border-orange-200 focus:outline-none focus:border-orange-400 bg-white/80"
          />
          <button
            type="button"
            className="p-2 text-orange-400 hover:bg-orange-100 rounded-full transition-colors"
          >
            <Smile size={20} />
          </button>
          <button
            type="submit"
            className="p-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}