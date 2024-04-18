import React from 'react';
import Header from '@/src/components/Header';
import About from './components/About';
import LogoSection from './components/LogoSection';
import s from './BrandBook.module.scss';

const BrandBook = () => {
  return (
    <div className={s.root}>
      <Header
        links={[
          { text: 'О приложении', redirectUrl: '#about' },
          { text: 'Логотип', redirectUrl: '#logo' },
          { text: 'Палитра', redirectUrl: '#colors' },
          { text: 'Шрифты', redirectUrl: '#fonts' },
          { text: 'Приемы', redirectUrl: '#features' },
          { text: 'Иконки', redirectUrl: '#icons' },
          { text: 'Паттерн', redirectUrl: '#pattern' },
        ]}
      />
      <About />
      <LogoSection />
    </div>
  );
};

export default BrandBook;
