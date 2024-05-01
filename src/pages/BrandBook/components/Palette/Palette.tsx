'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/src/hooks/useTheme';
import ChangeThemeIcon from '@/src/ui/ChangeThemeIcon';
import ColorCard from './components/ColorCard';
import AdditionalColor from './components/AdditionalColor';
import s from './Palette.module.scss';

const Palette = (): React.ReactNode => {
  const [theme] = useTheme();
  const darkAdditionalColors = [
    { name: 'Viridian', color: '#83A598' },
    { name: 'Bone', color: '#CBC5B7' },
    { name: 'Lion', color: '#BF8F6C' },
    { name: 'Persian', color: '#E78A4E' },
    { name: 'Earth', color: '#D8A657' },
    { name: 'Lavender ', color: '#A78AC5' },
    { name: 'Puce', color: '#D3869B' },
    { name: 'Salmon', color: '#E9806E' },
  ];
  const lightAdditionalColors = [
    { name: 'Honeydew', color: '#AFCFC3' },
    { name: 'Bone', color: '#CBC5b7' },
    { name: 'Buff', color: '#D8A078' },
    { name: 'Tangerine', color: '#FF9957' },
    { name: 'Hunyadi', color: '#F5B95A' },
    { name: 'Wisteria', color: '#BC9BDE' },
    { name: 'Amaranth', color: '#E993AB' },
    { name: 'Sienna', color: '#FB8773' },
  ];

  return (
    <section className={s.root} id="colors">
      <Image
        className={s.colorsBackground}
        src={
          theme === 'light'
            ? './images/backgrounds/light/paletteBackground.svg'
            : './images/backgrounds/dark/paletteBackground.svg'
        }
        fill
        style={{ objectFit: 'cover' }}
        alt={'background'}
      />
      <div className={s.header}>
        <aside className={s.description}>
          <h1 className={s.descriptionTitle}>Цветовая палитра</h1>
          <p className={s.descriptionText}>
            Работа с цветом бренда основана на использовании двух основных палитр: темной и светлой.
            Темная палитра включает в себя оттенки серого, черного и зеленого для создания основы и
            акцентов. Светлая палитра представлена оттенками белого, светло-серого и зеленого для
            создания более мягкого и светлого визуального образа.
          </p>
        </aside>
        <ChangeThemeIcon />
      </div>
      <div className={s.colors}>
        <h1 className={s.descriptionTitle}>Главные цвета</h1>
        <div className={s.colorCards}>
          <ColorCard
            color={
              theme === 'light'
                ? { name: 'Pistachio', color: '#92CB7D' }
                : { name: 'Olivine', color: '#8EC07C' }
            }
            textColor="#333"
          />
          <ColorCard
            color={
              theme === 'light'
                ? { name: 'Jet', color: '#333' }
                : { name: 'Cosmic latte', color: '#FBf5E5' }
            }
            textColor={theme === 'light' ? '#FBF5E5' : '#333'}
          />
          <ColorCard
            color={
              theme === 'light'
                ? { name: 'Cosmic latte', color: '#FBF5E5' }
                : { name: 'Black olive', color: '#34342F' }
            }
            textColor={theme === 'light' ? '#333' : '#FBF5E5'}
          />
        </div>
        <h1 className={s.descriptionTitle}>Дополнительные цвета</h1>
        <div className={s.secondaryColors}>
          {(theme === 'dark' ? darkAdditionalColors : lightAdditionalColors).map((color) => (
            <AdditionalColor key={color.color} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Palette;
