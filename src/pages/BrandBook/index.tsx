import React from 'react';
import Header from '@/src/components/Header';

const BrandBook = () => {
  return (
    <>
      <Header
        links={[
          { text: 'Об услуге', redirectUrl: '#about' },
          { text: 'Логотип', redirectUrl: '#logo' },
          { text: 'Палитра', redirectUrl: '#colors' },
          { text: 'Шрифты', redirectUrl: '#fonts' },
          { text: 'Приемы', redirectUrl: '#features' },
          { text: 'Иконки', redirectUrl: '#icons' },
          { text: 'Паттерн', redirectUrl: '#pattern' },
        ]}
      />
    </>
  );
};

export default BrandBook;
