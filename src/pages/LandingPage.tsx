import React, { useState } from 'react';
import { useThemeStore } from '../store/themeStore';
import AuthForm from '../components/AuthForm';
import { useAuthStore } from '../store/authStore';

export default function LandingPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const isDark = useThemeStore((state) => state.isDark);
  const login = useAuthStore((state) => state.login);

  const handleAuth = () => {
    login(); // In a real app, this would happen after successful authentication
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <span className="text-6xl animate-bounce inline-block">🍡</span>
            <span className="text-6xl absolute -right-8 -top-2 transform -rotate-12">🐕</span>
          </div>
        </div>
        <h1 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-orange-600'}`}>
          ShibaChat
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-orange-500'}`}>
          Join the most kawaii chat experience! ✨
        </p>
      </div>

      <div className={`w-full max-w-md p-8 rounded-3xl shadow-lg backdrop-blur-sm 
        ${isDark ? 'bg-gray-800/50 border-2 border-orange-400/20' : 'bg-white/80 border-2 border-orange-200'}`}>
        <AuthForm isSignUp={isSignUp} onToggle={() => setIsSignUp(!isSignUp)} onSubmit={handleAuth} />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {[
          { emoji: "🎨", title: "Kawaii Design", desc: "Cute and colorful interface" },
          { emoji: "🌙", title: "Dark Mode", desc: "Easy on your eyes at night" },
          { emoji: "🔒", title: "Secure", desc: "Your messages are protected" }
        ].map((feature, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl text-center transition-transform hover:scale-105
              ${isDark ? 'bg-gray-800/50 border-2 border-orange-400/20' : 'bg-white/80 border-2 border-orange-200'}`}
          >
            <span className="text-4xl mb-4 block">{feature.emoji}</span>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-orange-600'}`}>
              {feature.title}
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-orange-500'}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}