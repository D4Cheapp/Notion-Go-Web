import React from 'react';
import Header from '@/src/components/Header';
import About from './components/About';
import LogoSection from './components/LogoSection';
import Palette from './components/Palette';

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
      <LogoSection />
      <Palette />
    </>
  );
};

export default BrandBook;
