import React from 'react';
import s from './AddCoverButton.module.scss';

interface Props {
  onClick?: () => void;
  color?: string;
}

const AddCoverButton = ({ color, onClick }: Props): React.ReactNode => {
  return (
    <svg
      className={s.icon}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      onClick={onClick}
    >
      <path
        fill={color ? color : 'var(--textColor)'}
        d="M10.286 13.714H0v-3.428h10.286V0h3.428v10.286H24v3.428H13.714V24h-3.428V13.714Z"
      />
    </svg>
  );
};

export default AddCoverButton;
