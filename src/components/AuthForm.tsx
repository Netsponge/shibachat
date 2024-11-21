import React, { useState } from 'react';
import { Mail, Lock, User, Dog } from 'lucide-react';

interface AuthFormProps {
  isSignUp: boolean;
  onToggle: () => void;
  onSubmit: () => void;
}

export default function AuthForm({ isSignUp, onToggle, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onSubmit();
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 dark:text-orange-300" size={20} />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-orange-200 dark:border-orange-400 focus:outline-none focus:border-orange-400 dark:focus:border-orange-300 bg-white/80 dark:bg-gray-800/80 dark:text-white transition-colors"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
        )}
        
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 dark:text-orange-300" size={20} />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-orange-200 dark:border-orange-400 focus:outline-none focus:border-orange-400 dark:focus:border-orange-300 bg-white/80 dark:bg-gray-800/80 dark:text-white transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 dark:text-orange-300" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-orange-200 dark:border-orange-400 focus:outline-none focus:border-orange-400 dark:focus:border-orange-300 bg-white/80 dark:bg-gray-800/80 dark:text-white transition-colors"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-400 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600 text-white rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <Dog size={20} />
          {isSignUp ? 'Join the Pack!' : 'Welcome Back!'}
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        {isSignUp ? 'Already have an account?' : 'Need an account?'}
        <button
          onClick={onToggle}
          className="ml-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}