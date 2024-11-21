import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-white" />
      ) : (
        <Moon className="w-6 h-6 text-orange-400" />
      )}
    </button>
  );
}