import React from 'react';
import TodoSection from './TodoSection';
import s from './ThemePreview.module.scss';

const ThemePreview = (): React.ReactNode => {
  const darkTheme = {
    background: '#34342f',
    secondBackground: '#42413c',
    textColor: '#fbf5e5',
    secondText: '#97948a',
    green: '#8ec07c',
    theme: 'dark' as 'light' | 'dark',
  };
  const lightTheme = {
    background: '#fbf5e5',
    secondBackground: '#eee8d9',
    textColor: '#333',
    secondText: '#83817b',
    green: '#92cb7d',
    theme: 'light' as 'light' | 'dark',
  };

  return (
    <section className={s.root}>
      <div className={s.theme}>
        <TodoSection colors={darkTheme} />
      </div>
      <div className={s.theme}>
        <TodoSection colors={lightTheme} />
      </div>
    </section>
  );
};

export default ThemePreview;
