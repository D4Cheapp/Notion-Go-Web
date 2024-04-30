import React from 'react';
import s from './MenuButton.module.scss';

interface Props {
  color?: string;
  onClick?: () => void;
}

const MenuButton = ({ onClick, color }: Props): React.ReactNode => {
  const dotColor = { backgroundColor: color ? color : 'var(--textColor)' };
  return (
    <label className={s.root} onClick={onClick}>
      <div className={s.dot} style={dotColor} />
      <div className={s.dot} style={dotColor} />
      <div className={s.dot} style={dotColor} />
    </label>
  );
};

export default MenuButton;
