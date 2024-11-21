import React from 'react';
import { useThemeStore } from '../store/themeStore';
import { useAuthStore } from '../store/authStore';
import ContactsList from '../components/ContactsList';
import ChatWindow from '../components/ChatWindow';
import { LogOut } from 'lucide-react';

export default function ChatPage() {
  const isDark = useThemeStore((state) => state.isDark);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="min-h-screen p-4">
      <button
        onClick={logout}
        className="fixed top-4 left-4 p-2 rounded-full bg-orange-100 dark:bg-gray-800 text-orange-500 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Logout"
      >
        <LogOut size={20} />
      </button>
      
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-8rem)]">
          <div className="lg:col-span-1">
            <ContactsList />
          </div>
          <div className="lg:col-span-2">
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  );
}