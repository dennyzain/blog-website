import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState<string>('light');
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

    return () => { localStorage.setItem('theme', theme); };
  }, [theme]);

  useEffect(() => {
    const local = localStorage.getItem('theme');
    if (local) {
      setTheme(local);
    }
  }, []);

  return [theme, setTheme] as const;
}
