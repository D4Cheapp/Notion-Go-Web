'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import ThemeSwitchButton from './ThemeSwitchButton';
import s from './Logo.module.scss';

const Logo = (): React.ReactNode => {
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
      <svg
        className={cn(s.hideButton, { [s.hidden]: isHidden })}
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={23}
        onMouseEnter={() => setIsHidden(true)}
        onMouseLeave={() => setIsHidden(false)}
      >
        <path
          fill={theme === 'dark' ? '#FBF5E5' : '#333333'}
          d="m17.16 11.932-1.649-1.648c.17-.89-.085-1.723-.767-2.5-.681-.776-1.562-1.08-2.642-.909l-1.648-1.648c.322-.151.65-.265.98-.34a4.773 4.773 0 0 1 1.066-.114c1.42 0 2.628.497 3.622 1.491.994.995 1.492 2.202 1.492 3.622 0 .38-.038.734-.114 1.066-.076.331-.19.658-.34.98Zm3.636 3.58-1.648-1.591c.72-.55 1.359-1.151 1.917-1.804a10.107 10.107 0 0 0 1.435-2.23c-.947-1.914-2.306-3.433-4.077-4.56-1.77-1.127-3.745-1.69-5.923-1.69-.55 0-1.089.037-1.62.113-.53.076-1.05.19-1.562.34L7.557 2.33a12.592 12.592 0 0 1 4.943-.966c2.86 0 5.407.79 7.642 2.372 2.235 1.581 3.854 3.631 4.858 6.15a13.289 13.289 0 0 1-1.719 3.111 12.51 12.51 0 0 1-2.485 2.514Zm.568 6.988-4.773-4.716c-.663.208-1.33.365-2.003.469a13.62 13.62 0 0 1-2.088.156c-2.86 0-5.407-.79-7.642-2.372C2.623 14.456 1.004 12.405 0 9.887.398 8.882.9 7.95 1.506 7.087A13.084 13.084 0 0 1 3.58 4.773L.455 1.59 2.045 0l20.91 20.91-1.591 1.59ZM5.17 6.364a12.203 12.203 0 0 0-1.505 1.619A10.245 10.245 0 0 0 2.5 9.886c.947 1.913 2.306 3.433 4.077 4.56 1.77 1.127 3.745 1.69 5.923 1.69.379 0 .748-.023 1.108-.07.36-.048.73-.1 1.108-.157l-1.023-1.08c-.208.057-.407.1-.596.128-.19.029-.389.043-.597.043-1.42 0-2.628-.497-3.622-1.492-.994-.994-1.492-2.201-1.492-3.622 0-.208.015-.407.043-.596.028-.19.071-.388.128-.597L5.17 6.363Z"
        />
      </svg>
    </section>
  );
};

export default Logo;
