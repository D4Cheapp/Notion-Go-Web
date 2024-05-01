'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import s from './ColorCard.module.scss';

interface Props {
  color: {
    name: string;
    color: string;
  };
  textColor: string;
}

const ColorCard = ({ color, textColor }: Props): React.ReactNode => {
  const [isHover, setIsHover] = useState<boolean>();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleCopyColor = async () => {
    await navigator.clipboard.writeText(color.color);
    setIsHover(false);
  };

  return (
    <div
      className={s.root}
      style={{ backgroundColor: color.color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => void handleCopyColor()}
    >
      <button className={cn(s.copyButton, { [s.hover]: !isHover })} style={{ color: textColor }}>
        Скопировать
      </button>
      <h1 className={cn(s.title, { [s.hover]: isHover })} style={{ color: textColor }}>
        {color.name}
      </h1>
      <p className={cn(s.text, { [s.hover]: isHover })} style={{ color: textColor }}>
        HEX {color.color}
      </p>
    </div>
  );
};

export default ColorCard;
