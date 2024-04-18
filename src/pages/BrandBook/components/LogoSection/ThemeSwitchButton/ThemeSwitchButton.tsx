import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import s from './ThemeSwitchButton.module.scss';

interface Props {
  style: string;
  handler: () => void;
  icon: string;
}

const ThemeSwitchButton = ({ handler, icon, style }: Props): React.ReactNode => {
  return (
    <button className={cn(s.button, style)} onClick={handler}>
      <Image
        src={`/icons/logos/${icon}.svg`}
        width={50}
        height={50}
        alt={'logo'}
      />
    </button>
  );
};

export default ThemeSwitchButton;
