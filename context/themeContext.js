// context/ThemeContext.js
import { createContext, useState, useEffect, useContext } from 'react';

// ساخت Context
const ThemeContext = createContext();

// پرایدر برای Context
export function ThemeProvider({ children }) {
  // مدیریت حالت تم با localStorage
  const [theme, setTheme] = useState(() => {
    // بررسی localStorage یا مقدار پیش‌فرض
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // اعمال تم روی document.documentElement
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // تابع برای سوییچ کردن تم
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// هوک برای استفاده از Context
export function useTheme() {
  return useContext(ThemeContext);
}