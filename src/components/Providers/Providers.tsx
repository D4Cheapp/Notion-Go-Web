'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { Roboto } from 'next/font/google';
import cn from 'classnames';
import { store } from '@/src/reduxjs';

interface Props {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

const Providers = ({ children }: Props): React.ReactNode => {
  const currentTheme = localStorage.getItem('theme');
  const isThemeSet = currentTheme === 'dark' || currentTheme === 'light';
  if (!isThemeSet) {
    localStorage.setItem('theme', 'dark');
  }
  return (
    <body
      className={cn(roboto.className, 'body', { [(currentTheme as string) + 'Theme']: isThemeSet })}
    >
      <Provider store={store}>{children}</Provider>
    </body>
  );
};

export default Providers;
