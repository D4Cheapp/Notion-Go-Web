'use client';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Roboto } from 'next/font/google';
import cn from 'classnames';
import { store } from '@/src/reduxjs';
import { ThemeContext } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

const Providers = ({ children }: Props): React.ReactNode => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    const isThemeExist = (localTheme === 'dark' || localTheme === 'light') && localTheme !== theme;
    if (isThemeExist) {
      setTheme(localTheme);
    } else {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <body className={cn(roboto.className, 'body', theme)}>
      <ThemeContext.Provider value={{ theme, handleChangeTheme: setTheme }}>
        <Provider store={store}>{children}</Provider>
      </ThemeContext.Provider>
    </body>
  );
};

export default Providers;
