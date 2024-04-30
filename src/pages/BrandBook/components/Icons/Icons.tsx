'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/src/hooks/useTheme';
import s from './Icons.module.scss';

const Icons = (): React.ReactNode => {
  const [theme] = useTheme();
  const [currentIcon, setCurrentIcon] = useState<{ location: string; name: string }>({
    location: 'checkbox',
    name: 'Чекбокс',
  });

  const handleIconChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentIcon({
      location: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    });
  };

  return (
    <section className={s.root} id="icons">
      <div className={s.iconContainer}>
        <h1 className={s.title}>{currentIcon.name}</h1>
        <div className={s.imageContainer}>
          <Image
            className={s.icon}
            alt={currentIcon.name}
            src={`/icons/properties/${theme}/${currentIcon.location}.svg`}
            fill
            objectFit="contain"
          />
        </div>
        <div className={s.selectContainer}>
          <div className={s.selectArrow} />
          <select
            className={s.select}
            name="propertyIcons"
            id="propertyIcons"
            value={currentIcon.location}
            onChange={handleIconChange}
          >
            <option value="checkbox">Чекбокс</option>
            <option value="date">Дата</option>
            <option value="email">Почта</option>
            <option value="multiSelect">Множественный выбор</option>
            <option value="number">Число</option>
            <option value="phone">Телефон</option>
            <option value="select">Выбор</option>
            <option value="status">Статус</option>
            <option value="text">Текст</option>
            <option value="time">Время</option>
            <option value="url">Ссылка</option>
            <option value="file">Файл</option>
          </select>
        </div>
      </div>
      <div className={s.descriptionContainer}>
        <h1 className={s.title}>Иконки свойств</h1>
        <p className={s.description}>
          Каждый тип свойства в приложении имеет свою иконку, которая помогает в быстром понимании
          его содержания
        </p>
      </div>
    </section>
  );
};

export default Icons;
