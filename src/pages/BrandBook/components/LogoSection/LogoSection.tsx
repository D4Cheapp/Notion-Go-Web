'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import ThemeSwitchButton from './ThemeSwitchButton';
import s from './LogoSection.module.scss';

const LogoSection = (): React.ReactNode => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'green'>('green');
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <section className={cn(s.root, s[theme])} id="logo">
      <div className={cn(s.description, { [s.hidden]: isHidden })}>
        <h1 className={s.descriptionTitle}>Метафора и символ</h1>
        <p className={s.descriptionText}>
          Буква “N” является ключевым элементом визуальной идентификации бренда Notion. Она не
          только начальная буква названия, но и играет важную роль в ассоциативном ряду, который
          формирует узнаваемость бренда. Когда пользователи видят букву “N” в контексте приложения
          для заметок и организации работы, они мгновенно ассоциируют её с Notion
        </p>
      </div>
      <h1 className={s.logo}>
        <Image
          className={s.icon}
          src={
            theme === 'dark'
              ? '/icons/logos/rawLight.svg'
              : theme === 'light'
                ? '/icons/logos/rawDark.svg'
                : '/icons/logos/rawDark.svg'
          }
          width={100}
          height={100}
          alt={'logo'}
        />
        otion Go
      </h1>
      <div className={cn(s.themeSwitchContainer, { [s.hidden]: isHidden })}>
        <ThemeSwitchButton
          style={s.darkButton}
          handler={() => setTheme('dark')}
          icon={'rawLight'}
        />
        <ThemeSwitchButton
          style={s.lightButton}
          handler={() => setTheme('light')}
          icon={'rawDark'}
        />
        <ThemeSwitchButton
          style={s.greenButton}
          handler={() => setTheme('green')}
          icon={'rawDark'}
        />
      </div>
      <Image
        className={cn(s.hideButton, { [s.hidden]: isHidden } )}
        onMouseEnter={() => setIsHidden(true)}
        onMouseLeave={() => setIsHidden(false)}
        src={theme === 'dark' ? '/icons/eye/lightEye.svg' : '/icons/eye/darkEye.svg'}
        width={50}
        height={50}
        alt={'hide interface'}
      />
    </section>
  );
};

export default LogoSection;
