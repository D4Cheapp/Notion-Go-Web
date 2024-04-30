import React from 'react';
import s from './TrashIcon.module.scss';

interface Props {
  onDelete?: () => void;
}

const TrashIcon = ({ onDelete }: Props): React.ReactNode => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={23}
      fill="var(--red)"
      className={s.root}
      onClick={onDelete}
    >
      <path d="M3.833 23a2.46 2.46 0 0 1-1.805-.75 2.46 2.46 0 0 1-.75-1.806V3.834H0V1.277h6.389V0h7.667v1.278h6.388v2.555h-1.277v16.611c0 .703-.25 1.305-.751 1.805-.5.5-1.102.751-1.805.751H3.833ZM16.611 3.833H3.833v16.611h12.778V3.834ZM6.39 17.89h2.555v-11.5H6.39v11.5Zm5.111 0h2.556v-11.5H11.5v11.5Z" />
    </svg>
  );
};

export default TrashIcon;
