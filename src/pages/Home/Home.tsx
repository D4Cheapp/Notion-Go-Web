import React from 'react';
import Header from '@/src/components/Header';
import styles from './Home.module.scss';

const Home = (): React.ReactNode => {
  return (
    <div className={styles.root}>
      <Header
        links={[
          { text: 'Список дел', redirectUrl: '/todo' },
          { text: 'Бренд', redirectUrl: '/brand' },
          { text: 'Настройки', redirectUrl: '/settings' },
        ]}
      />
      Home
    </div>
  );
};

export default Home;
