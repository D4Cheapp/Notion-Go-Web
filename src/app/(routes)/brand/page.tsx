import React from 'react';
import Header from '@/src/components/common/Header';
import About from '@/src/components/pages/BrandBook/About';
import Logo from '@/src/components/pages/BrandBook/Logo';
import Palette from '@/src/components/pages/BrandBook/Palette';
import ThemePreview from '@/src/components/pages/BrandBook/ThemePreview';
import Fonts from '@/src/components/pages/BrandBook/Fonts';
import Icons from '@/src/components/pages/BrandBook/Icons';

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
      <Fonts />
      <Icons />
    </>
  );
};

export default BrandBook;
