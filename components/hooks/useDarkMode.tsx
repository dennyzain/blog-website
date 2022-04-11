import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    if (!localStorage.theme)localStorage.setItem('theme', 'light');
    const local = localStorage.getItem('theme');
    setTheme(local!);
  }, []);

  useEffect(() => {
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('text-text-dark-mode');
      document.documentElement.classList.add('bg-dark-mode');
      document.documentElement.classList.remove('text-text-light-mode');
      document.documentElement.classList.remove('bg-light-mode');
    } else {
      document.documentElement.classList.add('text-text-light-mode');
      document.documentElement.classList.add('bg-light-mode');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('text-text-dark-mode');
      document.documentElement.classList.remove('bg-dark-mode');
    }
    document.documentElement.classList.add('transition-colors');
    document.documentElement.classList.add('duration-500');

    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useDarkMode;
