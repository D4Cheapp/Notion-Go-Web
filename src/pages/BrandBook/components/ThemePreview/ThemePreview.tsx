import React from 'react';
import TodoSection from './TodoSection';
import s from './ThemePreview.module.scss';

const darkTheme = {
  textColor: '#fbf5e5',
  background: '#34342f',
  secondBackground: '#42413c',
  secondText: '#97948a',
  green: '#8ec07c',
};

const lightTheme = {
  background: '#fbf5e5',
  secondBackground: '#eee8d9',
  textColor: '#333',
  secondText: '#83817b',
  green: '#92cb7d',
};

const ThemePreview = (): React.ReactNode => {
  return (
    <section className={s.root}>
      <div
        className={s.themePreview}
        style={{ backgroundColor: darkTheme.background, borderColor: darkTheme.secondBackground }}
      >
        <TodoSection colors={darkTheme} />
      </div>
      <div
        className={s.themePreview}
        style={{ backgroundColor: lightTheme.background, borderColor: lightTheme.secondBackground }}
      >
        <TodoSection colors={lightTheme} />
      </div>
    </section>
  );
};

export default ThemePreview;
