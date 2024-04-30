'use client';
import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { useTheme } from '@/src/hooks/useTheme';
import s from './Fonts.module.scss';

interface Props {}

const Fonts = ({}: Props): React.ReactNode => {
  const [theme] = useTheme();

  return (
    <section className={s.root} id="fonts">
      <Image
        className={s.background}
        src={
          theme === 'light'
            ? './images/backgrounds/light/fontBackground.svg'
            : './images/backgrounds/dark/fontBackground.svg'
        }
        fill
        style={{ objectFit: 'cover' }}
        alt={'background'}
      />
      <div className={s.robotoContainer}>
        <h1 className={s.title}> Удобство и простота в одном приложении</h1>
        <div className={s.descriptionContainer}>
          <h1 className={cn(s.fontName, s.robotoName)}>Roboto</h1>
          <p className={cn(s.description, s.robotoDescription)}>
            Шрифт Roboto, используемый для заголовков в приложении, отличается своей современностью
            и простотой. Его читаемость и узнаваемость делают его идеальным для использования в
            заголовках
          </p>
        </div>
      </div>
      <div className={s.montserratContainer}>
        <h1 className={cn(s.title, s.montserratTitle)}>Улучшите свою продуктивность</h1>
        <div className={s.descriptionContainer}>
          <h1 className={cn(s.fontName, s.montserratName)}>Montserrat</h1>
          <p className={cn(s.description, s.montserratDescription)}>
            Шрифт Montserrat, используемый в приложении, отличается своей ясностью и доступностью.
            Его классическая форма и чёткие линии делают его идеальным для длинного текста
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fonts;
