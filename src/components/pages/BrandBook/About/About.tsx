'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/src/hooks/useTheme';
import AppIcon from '@/src/ui/AppIcon';
import s from './About.module.scss';

const About = (): React.ReactNode => {
  const [theme] = useTheme();

  return (
    <section className={s.root} id="about">
      <Image
        className={s.background}
        src={
          theme === 'light'
            ? './images/backgrounds/light/aboutBackground.svg'
            : './images/backgrounds/dark/aboutBackground.svg'
        }
        fill
        style={{ objectFit: 'cover' }}
        alt={'background'}
      />
      <div className={s.appIcon}>
        <AppIcon width={200} height={200} />
      </div>
      <h1 className={s.appTitle}>
        Notion Go - удобный список дел и упрощенный интерфейс для работы с notion.
      </h1>
      <div className={s.appDescriptionContainer}>
        <div className={s.description}>
          <h1 className={s.secondTitle}>Быстрее и эффективнее</h1>
          <p className={s.descriptionText}>
            Если вы уже используете notion, то вы будете рады удобству и простоте использования
            Notion Go.
          </p>
        </div>
        <div className={s.description}>
          <h1 className={s.secondTitle}>Улучшенный опыт работы</h1>
          <p className={s.descriptionText}>
            Мы добавили самые удобные функции, чтобы помочь вам в работе, и вы можете использовать
            их в любой момент.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
