'use client';
import React, { memo } from 'react';
import Image from 'next/image';
import { useTheme } from '../../hooks/useTheme';
import styles from './ChangeThemeIcon.module.scss';

const ChangeThemeIcon = memo(function ChangeThemeIcon() {
  const [theme, setTheme] = useTheme();
  return (
    <Image
      className={styles.icon}
      onClick={setTheme}
      src={theme === 'light' ? '/icons/themeSwitch/moon.svg' : '/icons/themeSwitch/sun.svg'}
      alt="Theme switch"
      width={40}
      height={40}
    />
  );
});

export default ChangeThemeIcon;
