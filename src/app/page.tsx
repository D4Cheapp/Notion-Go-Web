import React from 'react';
import Header from '../components/common/Header';

const HomePage = () => {
  return (
    <>
      <Header
        links={[
          { text: 'Список дел', redirectUrl: '/todo' },
          { text: 'Бренд', redirectUrl: '/brand' },
          { text: 'Настройки', redirectUrl: '/settings' },
        ]}
      />
      Home
    </>
  );
};

export default HomePage;
