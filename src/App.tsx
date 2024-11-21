import React from 'react';
import { useThemeStore } from './store/themeStore';
import { useAuthStore } from './store/authStore';
import ThemeToggle from './components/ThemeToggle';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';

function App() {
  const isDark = useThemeStore((state) => state.isDark);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className={`min-h-screen transition-colors ${isDark ? 'dark bg-gray-900' : 'bg-orange-50'}`}>
      <ThemeToggle />
      {isAuthenticated ? <ChatPage /> : <LandingPage />}
    </div>
  );
}

export default App;