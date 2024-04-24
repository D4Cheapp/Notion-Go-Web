import React from 'react';
import Header from '@/src/components/Header';
import About from './components/About';
import Logo from './components/Logo';
import Palette from './components/Palette';
import ThemePreview from './components/ThemePreview';

const BrandBook = () => {
  return (
    <>
      <Header
        links={[
          { text: 'О приложении', redirectUrl: '#about' },
          { text: 'Логотип', redirectUrl: '#logo' },
          { text: 'Палитра', redirectUrl: '#colors' },
          { text: 'Шрифты', redirectUrl: '#fonts' },
          { text: 'Иконки', redirectUrl: '#icons' },
        ]}
      />
      <About />
      <Logo />
      <Palette />
      <ThemePreview />
    </>
  );
};

export default BrandBook;
