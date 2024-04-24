import React from 'react';
import s from './PropTemplate.module.scss';

interface Props {
  svg: React.ReactNode;
  children?: React.ReactNode;
}

const PropTemplate = ({ svg, children }: Props) => {
  return (
    <div className={s.propertyContainer}>
      <div className={s.propertyLogo}>
        {svg}
      </div>
      {children}
    </div>
  );
};

export default PropTemplate;
