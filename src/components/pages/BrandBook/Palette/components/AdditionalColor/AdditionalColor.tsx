'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import s from './AdditionalColor.module.scss';

interface Props {
  color: {
    name: string;
    color: string;
  };
}

const AdditionalColor = ({ color }: Props): React.ReactNode => {
  const [isHover, setIsHover] = useState<boolean>();

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  const handleCopyColor = async () => {
    await navigator.clipboard.writeText(color.color);
    setIsHover(false);
  };

  return (
    <div key={color.color} className={s.additionalColor}>
      <p className={s.additionalColorText}>{color.name}</p>
      <button
        className={s.additionalColorButton}
        style={{ backgroundColor: color.color }}
        onClick={() => void handleCopyColor()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className={cn(s.copyColorText, { [s.hide]: !isHover })}>Скопировать</p>
        <p className={cn(s.buttonText, { [s.hide]: isHover })}>{color.color}</p>
      </button>
    </div>
  );
};

export default AdditionalColor;
